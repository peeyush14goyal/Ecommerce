import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { RootStoreContext } from "../../app/stores/rootStore";
import List from "./components/List";
import Search from "./components/Search";
import { IUser, IUserSearch } from "../../app/models/user";

const PAGE_LIMIT = +process.env.REACT_APP_PAGE_SIZE!;

const SystemUserContainer: React.FC = () => {
  const rootStore = useContext(RootStoreContext);
  const {
    pagedUser,
    loadPagedUser
  } = rootStore.userStore;
  const [searchParam, setSearchParam] = useState<IUserSearch | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const _handleSortDirection = async (sortDirection: string) => {
    const searchValue: IUserSearch = {
      name: searchParam?.name,
      email:searchParam?.email,
      mobile:searchParam?.mobile,
      role:searchParam?.role,
      sortBy: searchParam?.sortBy,
      sortDirection: sortDirection,
    };
    setSearchParam(searchValue);
    await loadPagedUser(currentPage, PAGE_LIMIT, searchParam!);
  };

  const _handlePage = async (currentPage: any) => {
    setCurrentPage(currentPage);
    await loadPagedUser(currentPage, PAGE_LIMIT, searchParam!);
  };

  const _handleSearch = async () => {};

  const _handleAdd = () => {
    //clearCategory();
    //editSelected(false);
  };

  useEffect(() => {
    loadPagedUser(currentPage, PAGE_LIMIT, searchParam!);
  }, [loadPagedUser]);

  return (
    <div>
      <Search onSearch={_handleSearch} />
      <List
        pagedData={pagedUser!}
        currentPage={currentPage}
        onSortDirection={_handleSortDirection}
        onPageChange={_handlePage}
        onAdd={_handleAdd}
      />
    </div>
  );
};

export default observer(SystemUserContainer);
