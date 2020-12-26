import React from "react";
import "./styles.scss";
import { order } from "../../data/data";

const Products = () => {
  return (
    <div className="products">
      <div className="m-3">
        <h5>
          <i className="fas fa-list mr-3"></i>Products
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
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {order.products.map((item) => {
              return (
                <tr>
                  <td>
                    <img src={item.picture} alt="img" />
                  </td>
                  <td>
                    <i className="italicText">{item.product_name}</i>
                    <br /> <b>SKU: </b>
                    {item.sku}
                  </td>
                  <td>${item.price} excl tax</td>
                  <td>{item.quantity}</td>
                  <td>${item.discount} excl tax</td>
                  <td>
                    ${item.price * item.quantity - item.discount} excl tax
                  </td>
                  <td className="d-flex flex-column align-items-center ">
                    <button className="btn btn-sm btn-outline-secondary m-1">
                      <i className="fas fa-pen mr-2"></i>
                      Edit
                    </button>
                    {/* <span className="d-block text-gray mt-1"> */}
                    <button className="btn btn-sm btn-outline-secondary m-1">
                      <i className="fas fa-trash-alt mr-2"></i>
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

export default Products;
