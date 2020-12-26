import React from "react";
import { order } from "../../data/data";
import "./styles.scss";

const Billing = () => {
  return (
    <div className="billing">
      <div className="m-3">
        <h5>
          <i className="fas fa-truck mr-3"></i>Billing & Shipping
        </h5>
      </div>
      <div className="billing_outer_box">
        <div>
          <div className="billingBoxText">
            <b>Billing Address</b>
          </div>
          <div className="billing_grid">
            <div>Fullname</div>
            <div>{order.billing.billing_address.full_name}</div>
            <div>Email</div>
            <div>{order.billing.billing_address.email}</div>
            <div>Phone</div>
            <div>{order.billing.billing_address.phone}</div>
            <div>Company</div>
            <div>{order.billing.billing_address.company}</div>
            <div>Address 1</div>
            <div>{order.billing.billing_address.address_1}</div>
            <div>Address 2</div>
            <div>{order.billing.billing_address.address_2}</div>
            <div>City</div>
            <div>{order.billing.billing_address.city}</div>
            <div>State</div>
            <div>{order.billing.billing_address.state}</div>
            <div>Pincode</div>
            <div>{order.billing.billing_address.pincode}</div>
          </div>
        </div>
        <div>
          <div className="billingBoxText">
            <b>Pickup Point Address</b>
          </div>
          <div className="billing_grid">
            <div>Address 1</div>
            <div>{order.billing.pickup_point_address.address_1}</div>
            <div>City</div>
            <div>{order.billing.pickup_point_address.city}</div>
            <div>Pincode</div>
            <div>{order.billing.pickup_point_address.pincode}</div>
          </div>
          <div className="mapsTextDiv">
            <a className="maps" href="#javascript">
              View address on Google Maps
            </a>
          </div>
        </div>
        <div className="buttonDiv">
          <button type="button" className="btn btn-primary">
            Edit
          </button>
        </div>
      </div>
      <div className="billing_outer_box">
        <div>
          <div className="billingBox2_grid">
            <div>
              <b>Shipping Method</b>
            </div>
            <div className="store_css">
              Pickup in store
              <button className="btn btn-primary">Edit</button>
            </div>
            <div>
              <b>Shipping Status</b>
            </div>
            <div>Shipped</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
