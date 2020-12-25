import { observable, action, runInAction } from "mobx";
import RootStore from "./rootStore";
import agent from "../api/agent";
import { ICustomer, IPagedCustomer, ICustomerSearch } from "../models/customer";

export default class CustomerStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable pagedCustomer: IPagedCustomer | null = null;
  @observable customers: ICustomer[] = [];
  @observable customer: ICustomer | null = null;
  @observable edited: boolean = false;

  @action loadPagedCustomer = async (
    page: number,
    pageSize: number,
    param: ICustomerSearch
  ) => {
    try {
      this.rootStore.commonStore.setLoader(true);
      const customers = await agent.Customer.getPagedCustomer(
        page,
        pageSize,
        param
      );
      console.log(customers);
      runInAction("loading customer", () => {
        this.pagedCustomer = customers;
      });
      this.rootStore.commonStore.setLoader(false);
    } catch (error) {
      this.rootStore.commonStore.setLoader(false);
    }
  };

  @action setSelectedCustomer = (customer: ICustomer) => {
    this.customer = customer;
  };

  @action clearCategory = () => {
    this.customer = null;
  };

  @action editSelected = (isEdited: boolean) => {
    this.edited = isEdited;
  };
}
