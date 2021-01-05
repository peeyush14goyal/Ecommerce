import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { IPagedUser, IUser, IUserLogin, IUserSearch } from "../models/user";
import { history } from "../..";
import { ICategory, ICategorySearch, IPagedCategory } from "../models/category";
import { IProductSearch, IPagedProduct } from "../models/product";
import { IApiResponse } from "../models/apiResponse";
import { ICustomerSearch, IPagedCustomer } from "../models/customer";
import { IPagedReseller } from "../models/reseller";

const baseUrl = process.env.REACT_APP_API_URL;

axios.interceptors.response.use(undefined, (error) => {
  if (error.message === "Network Error" && !error.response) {
    toast.error("Network error - make sure API is running!");
  }
  const { status, data, config, headers } = error.response;
  if (status === 404) {
    history.push("/notfound");
  }
  if (
    status === 401 &&
    headers["www-authenticate"] ===
      'Bearer error="invalid_token", error_description="The token is expired"'
  ) {
    window.localStorage.removeItem("jwt");
    history.push("/");
    toast.info("Your session has expired, please login again");
  }
  if (
    status === 400 &&
    config.method === "get" &&
    data.errors.hasOwnProperty("id")
  ) {
    history.push("/notfound");
  }
  if (status === 500) {
    toast.error("Server error - check the terminal for more info!");
  }
  throw error.response;
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => axios.get(baseUrl + url).then(responseBody),
  post: (url: string, body: {}) =>
    axios.post(baseUrl + url, body).then(responseBody),
  put: (url: string, body: {}) =>
    axios.put(baseUrl + url, body).then(responseBody),
  del: (url: string) => axios.delete(baseUrl + url).then(responseBody),
  postForm: (url: string, file: Blob) => {
    let formData = new FormData();
    formData.append("File", file);
    return axios
      .post(url, formData, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then(responseBody);
  },
};

const User = {
  login: (user: IUserLogin): Promise<IUser> =>
    requests.post(`/identity-service/sign-in`, user),
  register: (user: IUserLogin): Promise<IUser> =>
    requests.post(`sign-up`, user),
  getPagedUser: (
    page: number,
    pageSize: number,
    param: IUserSearch
  ): Promise<IPagedUser> =>
    requests.post(
      `:8003/identity-service/page/${page}/page-size/${pageSize}/users`,
      param
    ),
};

const Product = {
  getProducts: (
    page: number,
    pageSize: number,
    param: IProductSearch
  ): Promise<IPagedProduct> =>
    param
      ? requests.post(
          `:8003/catalog-service/product/page/${page}/page-size/${pageSize}/category/-1/products`,
          param
        )
      : requests.post(
          `:8003/catalog-service/product/page/${page}/page-size/${pageSize}/category/-1/products`,
          {}
        ),
  getCategories: (): Promise<ICategory[]> =>
    requests.get(`:8003/catalog-service/category/categories`),
  addProduct: (payload: any): Promise<ICategory[]> =>
    requests.post(`:8003/product/save`, payload),
  uploadPhoto: (id: string, photo: Blob): Promise<IApiResponse> =>
    requests.postForm(`/photos/${id}`, photo),
};

const Category = {
  getPagedCategories: (
    page: number,
    pageSize: number,
    param: ICategorySearch
  ): Promise<IPagedCategory> =>
    param
      ? requests.post(
          `:8003/catalog-service/category/page/${page}/page-size/${pageSize}/categories`,
          param
        )
      : requests.post(
          `:8003/catalog-service/category/page/${page}/page-size/${pageSize}/categories`, //for initial call if param is null then passing
          {} //empty array
        ),

  getCategories: (): Promise<ICategory[]> =>
    requests.get(`:8003/catalog-service/category/categories`),
  addEditCategory: (category: ICategory): Promise<IApiResponse> =>
    requests.post(`:8003/product/save`, category),
  uploadPhoto: (id: string, photo: Blob): Promise<IApiResponse> =>
    requests.postForm(`/photos/${id}`, photo),
};

const Order = {
  getOrderList: (
    page: number,
    pageSize: number,
    param: ICategorySearch
  ): Promise<ICategory[]> =>
    param
      ? requests.post(
          `:8004/order-service/page/${page}/page-size/${pageSize}/orders`,
          param
        )
      : requests.post(
          `:8004/order-service/page/${page}/page-size/${pageSize}/orders`,
          {}
        ),
};

const Customer = {
  getPagedCustomer: (
    page: number,
    pageSize: number,
    param: ICustomerSearch
  ): Promise<IPagedCustomer> =>
    requests.post(
      `:8001/customer-service/page/${page}/page-size/${pageSize}/customers`,
      param
    ),
};

const Reseller = {
  getPagedReseller: (
    page: number,
    pageSize: number,
    param: any
  ): Promise<IPagedReseller> =>
    param
      ? requests.post(
          `:8005/customer-service/page/${page}/page-size/${pageSize}/resellers`,
          param
        )
      : requests.post(
          `:8005/customer-service/page/${page}/page-size/${pageSize}/resellers`,
          {}
        ),
};

export default {
  User,
  Category,
  Product,
  Order,
  Customer,
  Reseller,
};
