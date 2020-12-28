import React, { useEffect, useState } from "react";
import View from "../../app/common/util/wrapperView";
import { order } from "./components/data/data";
import "./Invoice.scss";

const invoiceDetails = {
  invoice_no: "#12548",
  customer_details: order.billing.billing_address,
  seller_details: order.billing.seller,
  products: order.products,
  order_info: order.info,
};

/**
 * na = Not Available Items
 * a = Available Items
 */
var total = {
  a_quantity: 0,
  a_discount: 0,
  a_total: 0,

  na_discount: 0,
  na_quantity: 0,
  na_total: 0,
};

const Invoice = () => {
  const [Total, setTotal] = useState(total);
  const [isLoaded, setLoaded] = useState(0);
  const [payment_Category, setPayCat] = useState();
  /* To calculate total */
  useEffect(() => {
    const getTotal = () => {
      order.products.map((item) => {
        if (item.status === 1) {
          total.a_total += item.price * item.quantity;
          total.a_discount += item.discount;
          total.a_quantity += item.quantity;
        } else {
          total.na_total += item.price * item.quantity;
          total.na_quantity += item.quantity;
          total.na_discount += item.discount;
        }
      });
      setTotal(total);
      setLoaded(1);
    };

    getTotal();
  });

  const Pay_Category = () => {
    if (invoiceDetails.order_info.payment_status === "Paid") {
      if (Total.na_total > 0) {
        return (
          <div>
            <text className="text-info">${Total.na_total}</text> transferred to
            FreshPurse
          </div>
        );
      }
    } else {
      return (
        <div>
          Payment Remaining:{" "}
          <text className="text-info">${Total.a_total - Total.na_total}</text>
        </div>
      );
    }
  };
  return (
    <>
      <View.DocumentTitle title="Invoice" />
      <div className="d-flex justify-content-between m-3">
        <div className="invoicePageHead">Invoice</div>
        <div>
          <button type="button" className="btn btn-danger m-1">
            Cancel Order
          </button>
        </div>
      </div>
      <div className="section bg-white m-3">
        <div className="invoice_info_display">
          <div>Order Id: </div>
          <div>#{invoiceDetails.order_info.order}</div>
          <div>Order Placed on: </div>
          <div>{invoiceDetails.order_info.created_on}</div>
          <div>Expected Delivery Date:</div>
          <div>{invoiceDetails.order_info.expected_delivery_date}</div>
          <div>Payment Mode: </div>
          <div>{invoiceDetails.order_info.payment_mode}</div>
          <div>Payment Status: </div>
          <div>
            <b>{invoiceDetails.order_info.payment_status}</b>
          </div>
        </div>

        <div>
          <h5>Customer Details</h5>
          <table className="table">
            <tr>
              <td>Full Name</td>
              <td>{invoiceDetails.customer_details.full_name}</td>
            </tr>
            <tr>
              <td>Delivery Address</td>
              <td>
                {invoiceDetails.customer_details.address_1},{" "}
                {invoiceDetails.customer_details.city},{" "}
                {invoiceDetails.customer_details.state}, Pincode:{" "}
                {invoiceDetails.customer_details.pincode}
              </td>
            </tr>
            <tr>
              <td>Contact No.</td>
              <td>{invoiceDetails.customer_details.phone}</td>
            </tr>
          </table>
        </div>
        <div>
          <h5>Seller Details</h5>
          <table className="table">
            <tr>
              <td>Name</td>
              <td>{invoiceDetails.seller_details.full_name}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>{invoiceDetails.seller_details.address}</td>
            </tr>
            <tr>
              <td>Contact No.</td>
              <td>{invoiceDetails.seller_details.contact}</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="section bg-white p-10 m-3">
        <div>
          <h5 className="text-success">
            <i className="fas fa-star"></i> Available Items
          </h5>
        </div>
        <div>
          <table className="table table-head-fixed text-nowrap">
            <thead>
              <tr>
                <th>Picture</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Discount</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {isLoaded &&
                order.products.map((item) => {
                  if (item.status === 1) {
                    return (
                      <tr>
                        <td>
                          <img src={item.picture} alt="img" />
                        </td>
                        <td>{item.product_name}</td>
                        <td>${item.price} excl tax</td>
                        <td>{item.quantity}</td>
                        <td>${item.discount} excl tax</td>
                        <td>
                          ${item.price * item.quantity - item.discount} excl tax
                        </td>
                      </tr>
                    );
                  }
                })}
              <tr className="last_row">
                <td></td>
                <td></td>
                <td>Total</td>
                <td>{Total.a_quantity}</td>
                <td>${Total.a_discount}</td>
                <td>${Total.a_total}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="section bg-white p-10 m-3">
        <div>
          <h5 className="text-danger">
            <i className="fas fa-star-half"></i> Not Available Items
          </h5>
        </div>
        <div>
          <table className="table table-head-fixed text-nowrap">
            <thead>
              <tr>
                <th>Picture</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Discount</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {isLoaded &&
                order.products.map((item) => {
                  if (item.status === 0) {
                    return (
                      <tr>
                        <td>
                          <img src={item.picture} alt="img" />
                        </td>
                        <td>{item.product_name}</td>
                        <td>${item.price} excl tax</td>
                        <td>{item.quantity}</td>
                        <td>${item.discount} excl tax</td>
                        <td>
                          ${item.price * item.quantity - item.discount} excl tax
                        </td>
                      </tr>
                    );
                  }
                })}
              <tr className="last_row">
                <td></td>
                <td></td>
                <td>Total</td>
                <td>{Total.na_quantity}</td>
                <td>${Total.na_discount}</td>
                <td>${Total.na_total}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="payment_info">{Pay_Category()}</div>
        <div className="thanks text-primary">
          Thank You for shopping with us!! <i className="far fa-smile-beam"></i>
        </div>
        <div className="nice_day_text text-primary">Have a Nice Day!</div>
      </div>
    </>
  );
};

export default Invoice;
