import React from "react";
import { order } from "../../data/data";
import "./styles.scss";

const OrderNotes = () => {
  return (
    <div className="order_notes">
      <div className="m-3">
        <h5>
          <i className="far fa-sticky-note mr-3"></i>Order Notes
        </h5>
      </div>
      <div>
        <table className="table table-head-fixed text-nowrap">
          <thead>
            <tr className="p-3 mb-2 bg-light text-dark">
              <th>Created on</th>
              <th>Note</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {order.order_notes.map((res) => {
              return (
                <tr>
                  <td>{res.created_on}</td>
                  <td>{res.note}</td>
                  <td>
                    <button className="btn btn-sm btn-outline-secondary mr-2">
                      <i className="fas fa-times mr-2"></i>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderNotes;
