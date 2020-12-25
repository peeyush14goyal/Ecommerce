import React, { useState } from "react";
import { Link } from "react-router-dom";

interface IProps {}

const SideNavComponent: React.FC<IProps> = (props) => {
    const [toggleCss, settoggleCss] = useState(false);

    const _toggleNav = () =>{
        settoggleCss(!toggleCss);
    }

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a href="/home" className="brand-link">
        <span className="brand-text font-weight-light">Suri</span>
      </a>
      <div className="sidebar">
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column nav-child-indent nav-flat">
            <li className="nav-item menu-open">
              <a href="/home" className="nav-link active">
                <i className="nav-icon fas fa-home"></i>
                <p>Home</p>
              </a>
            </li>
            <li className="nav-item has-treeview" onClick={_toggleNav}>
              <a className="nav-link active">
                <i className="nav-icon fa fa-book"></i>
                <p>
                  Catalog
                  <i className="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul className={toggleCss?'nav nav-treeview d-block':'nav nav-treeview'}>
                <li className="nav-item">
                  <Link className="nav-link" to="/category">
                  <i className="far fa-circle nav-icon"></i>
                    <p>Category</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/product-list">
                  <i className="far fa-circle nav-icon"></i>
                    <p>Product</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item has-treeview">
              <Link className="nav-link active" to="/customers">
                <i className="nav-icon fas fa-user"></i>
                    <p>Customer</p>
              </Link>
            </li>
            <li className="nav-item has-treeview">
              <Link className="nav-link active" to="/resellers">
                <i className="nav-icon fas fa-user"></i>
                    <p>Reseller</p>
              </Link>
            </li>
            <li className="nav-item has-treeview">
              <Link className="nav-link active" to="/orders">
                <i className="nav-icon fas fa-clipboard-list"></i>
                    <p>Order</p>
              </Link>
            </li>
            <li className="nav-item has-treeview" onClick={_toggleNav}>
              <a className="nav-link active">
                <i className="nav-icon fas fa-cube"></i>
                <p>
                  System
                  <i className="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul className={toggleCss?'nav nav-treeview d-block':'nav nav-treeview'}>
                <li className="nav-item">
                  <Link className="nav-link" to="/users">
                  <i className="far fa-circle nav-icon"></i>
                    <p>User</p>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default SideNavComponent;
