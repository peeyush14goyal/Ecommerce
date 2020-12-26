import React from "react";
import Billing from "./components/editComponents/Billing/index";
import Info from "./components/editComponents/Info/index";
import OrderNotes from "./components/editComponents/Notes/index";
import Products from "./components/editComponents/Products/index";
import View from "../../app/common/util/wrapperView";
import "./OrderEditContainer.scss";

const OrderEditComponent = () => {
  return (
    <>
      <View.DocumentTitle title="Edit Order Details - 4" />
      <div className="editPage">
        <div className="d-flex justify-content-between">
          <div className="editPageHead">Edit Order Details - 4</div>
          <div>
            <button className="btn btn-info m-1">
              <i className="fas fa-file-alt mr-2"></i>Invoice (PDF)
            </button>
            <button className="btn btn-danger m-1">
              <i className="fas fa-trash-alt mr-2"></i>Delete
            </button>
          </div>
        </div>
        <div className="editPageFlex">
          <div>
            <Info />
          </div>
          <div>
            <Billing />
          </div>
          <div>
            <Products />
          </div>
          <div>
            <OrderNotes />
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderEditComponent;
