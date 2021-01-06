import React, { Fragment, useContext, useEffect, useState } from "react";
import Pager from "../../../app/common/table/Pager";
import {
  OrderStatusData,
  PaymentStatusData,
  ShippingStatusData,
} from "./common/select-data";
import { history } from "../../..";
interface IProps {}

const OrderListComponent = (props: any) => {
  const onEditAction = (e: any, ele: any) => {
    props.emitOnEditAction(ele);
  };

  const _handlePage = (currentPage: any) => {
    console.log("currentPage", currentPage);
    props.emitSetCurrentPage(currentPage);
  };

  const onCancelEvent = () => {
    props.emitCancelEvent();
  };

  const onDetailClick = () => {
    history.push("/editOrder");
  };

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div
              className="line-loader"
              style={{ display: props.isListLoading ? "" : "none" }}
            ></div>
            <div
              className="card-body table-responsive p-0"
              style={{ height: "48vh" }}
            >
              <table className="table table-head-fixed text-nowrap">
                <thead>
                  <tr>
                    {/* <th>
                                            <input type="checkbox"
                                                name="deleteRadio"
                                                id="optionsRadiosAll"
                                                value="" />
                                        </th> */}
                    <th>Order #</th>
                    <th>Order Status</th>
                    <th>Payment Status</th>
                    <th>Shipping Status</th>
                    <th>Customer</th>
                    <th>Created On</th>
                    <th>Order Total</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {props.pagedOrders &&
                    props.pagedOrders.orders.map((indProduct: any, i: any) => {
                      let orderStatusText,
                        paymentStatusText,
                        shippingStatusText;
                      let displayDate = indProduct.createdAt.substr(0, 10);
                      let displayTime = indProduct.createdAt.substr(11, 5);

                      switch (indProduct.orderStatusId + 1) {
                        case 1:
                          orderStatusText = "Pending";
                          break;
                        case 2:
                          orderStatusText = "Processing";
                          break;
                        case 3:
                          orderStatusText = "Complete";
                          break;
                        case 4:
                          orderStatusText = "Cancelled";
                          break;
                        default:
                          orderStatusText = "Invalid";
                      }
                      switch (indProduct.paymentStatusId + 1) {
                        case 1:
                          paymentStatusText = "Paid";
                          break;
                        case 2:
                          paymentStatusText = "Pending";
                          break;
                        case 3:
                          paymentStatusText = "Refund";
                          break;

                        default:
                          paymentStatusText = "Invalid";
                      }
                      switch (indProduct.shippingStatusId + 1) {
                        case 1:
                          shippingStatusText = "Not yet shipped";
                          break;
                        case 2:
                          shippingStatusText = "Shipping Not Required";
                          break;
                        case 3:
                          shippingStatusText = "Shipped";
                          break;
                        case 4:
                          shippingStatusText = "Delivered";
                          break;
                        default:
                          shippingStatusText = "Invalid";
                      }
                      return (
                        <tr key={i}>
                          {/* <td>
                                                <input type="checkbox"
                                                    name={`deleteRadio${i + 1}`}
                                                    id={`optionsRadios${i + 1}`}
                                                    value="" />
                                            </td> */}
                          <td>{indProduct.orderNumber}</td>
                          <td>
                            {props.isEditable &&
                            props.selectedItem.id === indProduct.id ? (
                              <>
                                <select
                                  className="form-control form-control-sm"
                                  name="orderStatus"
                                  // value={indProduct.orderStatus}
                                  value={orderStatusText}
                                >
                                  {OrderStatusData.map((a) => (
                                    <option key={a} value={a}>
                                      {a}
                                    </option>
                                  ))}
                                </select>
                              </>
                            ) : (
                              <>{/*indProduct.orderStatus*/ orderStatusText}</>
                            )}
                          </td>
                          <td>
                            {props.isEditable &&
                            props.selectedItem.id === indProduct.id ? (
                              <>
                                <select
                                  className="form-control form-control-sm"
                                  name="paymentStatus"
                                  //value={indProduct.paymentStatus}
                                  value={paymentStatusText}
                                >
                                  {PaymentStatusData.map((a) => (
                                    <option key={a} value={a}>
                                      {a}
                                    </option>
                                  ))}
                                </select>
                              </>
                            ) : (
                              <>
                                {/*indProduct.paymentStatus*/ paymentStatusText}
                              </>
                            )}
                          </td>
                          <td>
                            {props.isEditable &&
                            props.selectedItem.id === indProduct.id ? (
                              <>
                                <select
                                  className="form-control form-control-sm"
                                  name="shippingStatus"
                                  //value={indProduct.shippingStatus}
                                  value={shippingStatusText}
                                >
                                  {ShippingStatusData.map((a) => (
                                    <option key={a} value={a}>
                                      {a}
                                    </option>
                                  ))}
                                </select>
                              </>
                            ) : (
                              <>
                                {
                                  /*indProduct.shippingStatus*/ shippingStatusText
                                }
                              </>
                            )}
                          </td>
                          <td>
                            {indProduct.customerName}
                            <span className="d-block text-gray mt-1">
                              <small>{indProduct.customerEmail}</small>
                            </span>
                          </td>
                          <td>
                            {displayDate} {displayTime}
                          </td>
                          <td>{indProduct.orderTotal}</td>
                          <td>
                            {props.isEditable &&
                            props.selectedItem.id === indProduct.id ? (
                              <>
                                <button
                                  type="button"
                                  className="btn btn-sm btn-outline-secondary mr-2"
                                >
                                  Save
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-sm btn-outline-secondary mr-2"
                                  onClick={() => onCancelEvent()}
                                >
                                  Cancel
                                </button>
                              </>
                            ) : (
                              <div className="d-flex flex-column align-items-center ">
                                <button
                                  type="button"
                                  className="btn btn-sm btn-outline-secondary m-1"
                                  onClick={(e) => onEditAction(e, indProduct)}
                                >
                                  Edit
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-sm btn-outline-secondary m-1"
                                  onClick={() => onDetailClick()}
                                >
                                  Detail
                                </button>
                              </div>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
          {props.pagedOrders && (
            <Pager
              pageSize={10}
              totalItemsCount={props.pagedOrders!.rowCount}
              activePage={props.currentPage}
              onPageChange={_handlePage}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default OrderListComponent;
