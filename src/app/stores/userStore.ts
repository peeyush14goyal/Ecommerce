import { observable, computed, action, runInAction } from 'mobx';
import { IPagedUser, IUser, IUserLogin, IUserSearch } from '../models/user';
import RootStore from './rootStore';
import agent from '../api/agent';
import { history } from '../..';

export default class UserStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable pagedUser: IPagedUser | null = null;
  @observable user: IUser | null = null;

  @computed get isLoggedIn() {
    return !!this.user;
  }

  @action loadPagedUser = async (
    page: number,
    pageSize: number,
    param: IUserSearch
  ) => {
    try {
      this.rootStore.commonStore.setLoader(true);
      const user = await agent.User.getPagedUser(
        page,
        pageSize,
        param
      );
      runInAction("loading user", () => {
        this.pagedUser = user;
      });
      this.rootStore.commonStore.setLoader(false);
    } catch (error) {
      this.rootStore.commonStore.setLoader(false);
    }
  };

  @action login = async (values: IUserLogin) => {
    try {
      const user = await agent.User.login(values);
      runInAction(() => {
        this.user = user;
      });
      this.rootStore.commonStore.setToken(user.accessToken);
      history.push('/home');
    } catch (error) {
      throw error;
    }
  };

  @action logout = () => {
    this.rootStore.commonStore.setToken(null);
    this.user = null;
    history.push('/login');
  };

  @action register = async (values: IUserLogin) => {
    try {
      const response = await agent.User.register(values);
      return response;
    } catch (error) {
      throw error;
    }
  };

}