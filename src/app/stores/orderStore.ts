import { observable, computed, action, runInAction } from "mobx";
import RootStore from "./rootStore";
import agent from "../api/agent";
export default class OrderStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable pagedOrders: any | null = null;
  @observable isOrderSave: boolean = false;
  @observable isEditable: boolean = false;
  @observable selectedItem: any = null;

  @observable isLoading: boolean = false;
  @action loadProducts = async (page: number, pageSize: number, param: any) => {
    try {
      this.isLoading = true;
      const products = await agent.Order.getOrderList(page, pageSize, param);
      console.log("Orders are ", products);
      runInAction("loading Products", () => {
        this.isLoading = false;
        this.pagedOrders = products;
      });
    } catch (error) {
      this.isLoading = false;
    }
  };

  @action onIndItemEdit = (data: any) => {
    this.selectedItem = data;
    this.isEditable = true;
  };

  @action onEditCancel = () => {
    this.selectedItem = null;
    this.isEditable = false;
  };

  @action addOrder = async (data: any) => {
    try {
      console.log("inside Add Order");
      const response = await agent.Order.addOrder(data);
      console.log(response);
      // addProduct
    } catch (error) {}
  };
}
