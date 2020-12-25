import { observable, computed, action, runInAction } from 'mobx';
import RootStore from './rootStore';
import agent from '../api/agent';

export default class ResellerStore {
    rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }

    @observable pagedrResellers: any | null = null;

    @observable isResellerLoading: boolean = false;

    @action loadReseller = async (page: number, pageSize: number, param: any) => {
        try {
            this.isResellerLoading = true;
            const resellers = await agent.Reseller.getPagedReseller(page, pageSize, param);
            runInAction('loading Resellers', () => {
                this.isResellerLoading = false;
                this.pagedrResellers = resellers;
            });
        } catch (error) {
            this.isResellerLoading = false;
        }
    }
}