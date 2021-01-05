import React, { Fragment, useContext, useEffect, useState } from "react";
import View from "../../app/common/util/wrapperView";
import { RootStoreContext } from "../../app/stores/rootStore";
import { observer } from "mobx-react-lite";
import OrderListComponent from "./components/OrderListComponent";
import OrderFormComponent from "./components/OrderFormComponent";
import { history } from "../..";
import BreadCrumb from "../../app/layout/BreadCrumb";

interface IProps {}
const PAGE_LIMIT = +process.env.REACT_APP_PAGE_SIZE!;

const OrderContainer: React.FC<IProps> = (props) => {
  const rootStore = useContext(RootStoreContext);
  const {
    pagedOrders,
    loadProducts,
    addOrder,
    isEditable,
    onEditCancel,
    selectedItem,
    onIndItemEdit,
  } = rootStore.orderStore;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParam, setSearchParam] = useState<any>(null);

  useEffect(() => {
    loadProducts(currentPage, PAGE_LIMIT, searchParam!);
  }, []);

  const getEmitedOnEditAction = (event: any) => {
    console.log(event);
    onIndItemEdit(event);
  };

  const _handlePage = async (currentPage: any) => {
    setCurrentPage(currentPage);
    await loadProducts(currentPage, PAGE_LIMIT, searchParam!);
  };

  const getEmitedCancelEvent = () => {
    onEditCancel();
  };
  const getEmitedFormData = (event: any) => {
    addOrder(event);
  };

  return (
    <>
      <View.DocumentTitle title="Orders" />
      <View.ContentDataLayout>
        <BreadCrumb pageName="Orders" />
        <OrderFormComponent
          emitFormData={(e: any) => getEmitedFormData(e)}
        ></OrderFormComponent>
        <OrderListComponent
          currentPage={currentPage}
          selectedItem={selectedItem}
          isEditable={isEditable}
          emitSetCurrentPage={(e: any) => _handlePage(e)}
          emitOnEditAction={(e: any) => getEmitedOnEditAction(e)}
          emitCancelEvent={() => getEmitedCancelEvent()}
          pagedOrders={pagedOrders}
        ></OrderListComponent>
      </View.ContentDataLayout>
    </>
  );
};

export default observer(OrderContainer);
