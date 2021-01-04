import { observer } from "mobx-react-lite";
import React, { Fragment, useContext, useEffect, useState } from "react";
import BreadCrumb from "../../app/layout/BreadCrumb";
import { ICategory, ICategorySearch } from "../../app/models/category";
import { RootStoreContext } from "../../app/stores/rootStore";
import CategoryTable from "./CategoryTable";
import SearchForm from "./SearchForm";

const PAGE_LIMIT = +process.env.REACT_APP_PAGE_SIZE!;

const CategoryPage = () => {
  const rootStore = useContext(RootStoreContext);
  const {
    pagedCategories,
    categories,
    loadCategories,
    setSelectedCategory,
    clearCategory,
    editSelected,
    allCategories,
  } = rootStore.categoryStore;
  const [searchParam, setSearchParam] = useState<ICategorySearch | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [editItemSelected, setEditItemSelected] = useState(false);

  const _handleSortDirection = async (sortDirection: string) => {
    const searchValue: ICategorySearch = {
      name: searchParam?.name,
      sortBy: searchParam?.sortBy,
      sortDirection: sortDirection,
    };
    setSearchParam(searchValue);
    await loadCategories(currentPage, PAGE_LIMIT, searchParam!);
  };

  const _handlePage = async (currentPage: any) => {
    setCurrentPage(currentPage);
    await loadCategories(currentPage, PAGE_LIMIT, searchParam!);
  };

  const _handleSearch = async (categoryhParam: ICategorySearch) => {
    const searchValue: ICategorySearch = {
      name: categoryhParam.name,
      sortBy: searchParam?.sortBy,
      sortDirection: searchParam?.sortDirection,
    };
    console.log("Before Search param is ", searchParam);
    setSearchParam(searchValue);
    console.log("Search Param is ", searchParam);
    await loadCategories(currentPage, PAGE_LIMIT, searchParam!);
  };

  const _handleSelectedCategory = (checked: boolean, category: ICategory) => {
    if (checked) {
      setSelectedCategory(category);
      setEditItemSelected(true);
      editSelected(true);
    } else {
      setEditItemSelected(false);
      clearCategory();
      editSelected(false);
    }
  };

  const _handleAdd = () => {
    clearCategory();
    editSelected(false);
  };

  useEffect(() => {
    loadCategories(currentPage, PAGE_LIMIT, searchParam!);
  }, [loadCategories]);

  return (
    <Fragment>
      <BreadCrumb pageName="Category" />
      <section className="content">
        <SearchForm onSearch={_handleSearch} />
        <CategoryTable
          pagedData={pagedCategories!}
          currentPage={currentPage}
          editItemSelected={editItemSelected}
          sortDirection={_handleSortDirection}
          onPageChange={_handlePage}
          onSelectItem={_handleSelectedCategory}
          onAdd={_handleAdd}
        />
      </section>
    </Fragment>
  );
};

export default observer(CategoryPage);
