import { observable, computed, action, runInAction } from "mobx";
import RootStore from "./rootStore";
import agent from "../api/agent";
import { IProductSearch, IPagedProduct, IProduct } from "../models/product";
import { ICategory } from "../models/category";
export default class ProductStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable pagedProducts: IPagedProduct | null = null;
  @observable isProductSave: boolean = false;
  @observable product: IProduct | null = null;
  @observable categories: ICategory[] = [];

  @observable isListLoading: boolean = false;
  @action loadProducts = async (page: number, pageSize: number, param: any) => {
    try {
      this.isListLoading = true;
      const products = await agent.Product.getProducts(page, pageSize, param);
      runInAction("loading Products", () => {
        this.isListLoading = false;
        this.pagedProducts = products;
      });
    } catch (error) {
      this.isListLoading = false;
    }
  };

  @action allCategories = async () => {
    try {
      const categories = await agent.Product.getCategories();
      runInAction("loading categories", () => {
        this.categories = categories;
      });
    } catch (error) {
      console.log(error);
    }
  };

  @action addProduct = async (data: any) => {
    try {
      const response = await agent.Product.addProduct(data);
      console.log(response);
      // addProduct
    } catch (error) {}
  };

  @action editProduct = async (data: any) => {
    try {
    } catch (error) {}
  };
}
