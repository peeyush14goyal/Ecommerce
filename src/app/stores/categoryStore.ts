import { observable, computed, action, runInAction } from "mobx";
import RootStore from "./rootStore";
import agent from "../api/agent";
import { ICategory, ICategorySearch, IPagedCategory } from "../models/category";
import { toast } from "react-toastify";

export default class CategoryStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable pagedCategories: IPagedCategory | null = null;
  @observable category: ICategory | null = null;
  @observable categories: ICategory[] = [];
  @observable edited: boolean = false;

  @action loadCategories = async (
    page: number,
    pageSize: number,
    param: ICategorySearch
  ) => {
    try {
      this.rootStore.commonStore.setLoader(true);
      const categories = await agent.Category.getPagedCategories(
        page,
        pageSize,
        param
      );
      runInAction("loading categories", () => {
        this.pagedCategories = categories;
      });
      this.rootStore.commonStore.setLoader(false);
    } catch (error) {
      this.rootStore.commonStore.setLoader(false);
    }
  };

  @action allCategories = async () => {
    try {
      this.rootStore.commonStore.setLoader(true);
      const categories = await agent.Category.getCategories();
      runInAction("loading categories", () => {
        this.categories = categories;
      });
      this.rootStore.commonStore.setLoader(false);
    } catch (error) {
      this.rootStore.commonStore.setLoader(false);
    }
  };

  @action uploadPhoto = async (id: string, file: Blob) => {
    this.rootStore.commonStore.setLoader(true);
    try {
      const photo = await agent.Category.uploadPhoto(id, file);
      runInAction(() => {
        this.rootStore.commonStore.setLoader(false);
        toast.success(photo.messages[0]);
      });
    } catch (error) {
      console.log(error);
      toast.error("Problem uploading photo");
      runInAction(() => {
        this.rootStore.commonStore.setLoader(false);
      });
    }
  };

  @action addCategory = async (category: ICategory) => {
    try {
      this.rootStore.commonStore.setLoader(true);
      console.log(category);
      // const result = await agent.Category.addEditCategory(category);
      // runInAction('category saved', () => {
      //   toast.success(result.messages[0]);
      // });
      this.category = category;
      this.rootStore.commonStore.setLoader(false);
    } catch (error) {
      this.rootStore.commonStore.setLoader(false);
    }
  };

  @action setSelectedCategory = (category: ICategory) => {
    this.category = category;
  };

  @action clearCategory = () => {
    this.category = null;
  };

  @action editSelected = (isEdited: boolean) => {
    this.edited = isEdited;
  };
}
