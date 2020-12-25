import { createContext } from 'react';
import { configure } from 'mobx';
import CommonStore from './commonStore';
import UserStore from './userStore';
import CategoryStore from './categoryStore';
import ProductStore from './productStore';
import OrderStore from './orderStore';
import CustomerStore from './customerStore';
import ResellerStore from './resellerStore';

configure({ enforceActions: 'always' });

export default class RootStore {

    commonStore: CommonStore;
    userStore: UserStore;
    categoryStore: CategoryStore;
    productStore: ProductStore;
    orderStore: OrderStore;
    customerStore: CustomerStore;
    resellerStore: ResellerStore;

    constructor() {
        this.commonStore = new CommonStore(this);
        this.userStore = new UserStore(this);
        this.categoryStore = new CategoryStore(this);
        this.productStore = new ProductStore(this);
        this.orderStore = new OrderStore(this)
        this.customerStore = new CustomerStore(this);
        this.resellerStore = new ResellerStore(this);
    }
}

export const RootStoreContext = createContext<RootStore>(new RootStore());