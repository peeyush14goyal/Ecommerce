import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { ICustomerSearch } from "../../app/models/customer";
import { RootStoreContext } from "../../app/stores/rootStore";
import List from "./components/List";
import Search from "./components/Search";

const PAGE_LIMIT = +process.env.REACT_APP_PAGE_SIZE!;

const CustomerContainer = () => {
  const rootStore = useContext(RootStoreContext);
  const { loadPagedCustomer, pagedCustomer } = rootStore.customerStore;
  const [searchParam, setSearchParam] = useState<ICustomerSearch | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    loadPagedCustomer(currentPage, PAGE_LIMIT, searchParam!);
  }, [loadPagedCustomer]);

  const _handleSortDirection = async (sortDirection: string) => {
    const searchValue: ICustomerSearch = {
      email: searchParam?.email,
      mobile: searchParam?.mobile,
      reseller: searchParam?.reseller,
      name: searchParam?.name,
      sortBy: searchParam?.sortBy,
      sortDirection: sortDirection,
    };
    setSearchParam(searchValue);
    await loadPagedCustomer(currentPage, PAGE_LIMIT, searchParam!);
  };

  const _handlePage = async (currentPage: any) => {
    setCurrentPage(currentPage);
    await loadPagedCustomer(currentPage, PAGE_LIMIT, searchParam!);
  };

  const _handleSearch = async (categoryhParam: ICustomerSearch) => {
    const searchValue: ICustomerSearch = {
      email: searchParam?.email,
      mobile: searchParam?.mobile,
      reseller: searchParam?.reseller,
      name: categoryhParam.name,
      sortBy: searchParam?.sortBy,
      sortDirection: searchParam?.sortDirection,
    };
    setSearchParam(searchValue);
    await loadPagedCustomer(currentPage, PAGE_LIMIT, searchParam!);
  };

  return (
    <div>
      <Search onSearch={_handleSearch} />
      <List
        pagedData={pagedCustomer!}
        currentPage={currentPage}
        onPageChange={_handlePage}
        onSortDirection={_handleSortDirection}
      />
    </div>
  );
};

export default observer(CustomerContainer);
