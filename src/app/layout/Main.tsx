/* eslint-disable */
import React, { lazy, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
const ProductListContainer = lazy(
  () => import("../../features/product/ProductListContainer")
);
const ProductFormContainer = lazy(
  () => import("../../features/product/ProductFormContainer")
);
const OrderContainer = lazy(
  () => import("../../features/order/OrderContainer")
);

const OrderEditComponent = lazy(
  () => import("../../features/order/OrderEditContainer")
);
import HeaderComponent from "../../app/common/main/HeaderComponent";
import DashboardPage from "../../features/dashboard/DashboardPage";
import CustomerPage from "../../features/customer/CustomerPage";
import SystemUserPage from "../../features/SystemUser/SystemUserPage";
import SideNavComponent from "../../app/common/main/SideNavComponent";
import FooterComponent from "../../app/common/main/FooterComponent";
import AddCategoryPage from "../../features/category/AddCategoryPage";
import CategoryPage from "../../features/category/CategoryPage";
import View from "../../app/common/util/wrapperView";
import LoadingComponent from "./LoadingComponent";
import { ToastContainer } from "react-toastify";
import RegisterPage from "../../features/SystemUser/RegisterPage";
import ResellerPage from "../../features/reseller/ResellerPage";

class Main extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <Fragment>
        <LoadingComponent />
        <ToastContainer position="top-right" />
        <View.MainLayout>
          <HeaderComponent></HeaderComponent>
          <SideNavComponent></SideNavComponent>
          <View.ContentLayout>
            <Switch>
              <Route exact path="/" component={DashboardPage} />
              <Route path={`/home`} component={DashboardPage} />
              <Route path={`/category`} component={CategoryPage} />
              <Route path={`/add-category`} component={AddCategoryPage} />
              <Route path={`/product-list`} component={ProductListContainer} />
              <Route path={`/add-product`} component={ProductFormContainer} />
              <Route path={`/customers`} component={CustomerPage} />
              <Route path={`/users`} component={SystemUserPage} />
              <Route path={`/orders`} component={OrderContainer} />
              <Route path={`/register-user`} component={RegisterPage} />
              <Route path={`/resellers`} component={ResellerPage} />
              <Route path={`/editOrder`} component={OrderEditComponent} />
            </Switch>
          </View.ContentLayout>
          <FooterComponent></FooterComponent>
        </View.MainLayout>
      </Fragment>
    );
  }
}

export default Main;
