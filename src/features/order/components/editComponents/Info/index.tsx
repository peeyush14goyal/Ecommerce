import React from "react";
import { order } from "../../data/data";
import "./styles.scss";

const Info = () => {
  return (
    <div className="info">
      <div className="m-3">
        <h5>
          <i className="fas fa-info mr-3"></i>Info
        </h5>
      </div>
      <div className="infoBox">
        <div className="dataInfoBox">
          <div className="col1">
            <b>Order #</b>
          </div>
          <div>{order.info.order}</div>
          <div className="col1">
            <b>Created on</b>
          </div>
          <div>{order.info.created_on}</div>
          <div className="col1">
            <b>Customer</b>
          </div>
          <div className="customer">{order.info.customer}</div>
          <div className="col1 order_status">
            <b>Order Status</b>
          </div>
          <div>
            <b>{order.info.order_status}</b>
            <button className="btn btn-sm btn-danger mr-2 ml-2">
              Cancel Order
            </button>
            <button className="btn btn-sm btn-primary mr-2">
              Change Status
            </button>
          </div>
        </div>
      </div>
      <div className="infoBox">
        <div className="dataInfoBox">
          <div className="col1">
            <b>Order Total</b>
          </div>
          <div>${order.info.order_total}</div>
          <div className="col1">
            <b>Profit</b>
          </div>
          <div>${order.info.profit}</div>
          <div className="col1">
            <b>Payment Status</b>
          </div>
          <div>{order.info.payment_status}</div>
          <div></div>
          <div className="infoBox2Buttons">
            <button className="btn btn-sm btn-primary mr-2">Refund</button>
            <button className="btn btn-sm btn-primary mr-2">
              Partial Refund
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
