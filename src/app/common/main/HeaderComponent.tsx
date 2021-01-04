import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { RootStoreContext } from "../../stores/rootStore";

const HeaderComponent: React.FC = () => {
  const rootStore = useContext(RootStoreContext);
  const { logout } = rootStore.userStore;
  const [userDropdown, setuserDropdown] = useState(false);

  // Capture on click event and setting of state for user dropdown component
  document.onclick = function (e: any) {
    if (userDropdown && e.target.id !== "userDropDown") {
      setuserDropdown(false);
    }
  };

  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button">
            <i className="fas fa-bars"></i>
          </a>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown">
          <a className="nav-link" data-toggle="dropdown" href="#">
            <i className="far fa-comments"></i>
            <span className="badge badge-danger navbar-badge">3</span>
          </a>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <a href="#" className="dropdown-item">
              <div className="media">
                <img
                  src="../../dist/img/user1-128x128.jpg"
                  alt="User Avatar"
                  className="img-size-50 mr-3 img-circle"
                />
                <div className="media-body">
                  <h3 className="dropdown-item-title">
                    Brad Diesel
                    <span className="float-right text-sm text-danger">
                      <i className="fas fa-star"></i>
                    </span>
                  </h3>
                  <p className="text-sm">Call me whenever you can...</p>
                  <p className="text-sm text-muted">
                    <i className="far fa-clock mr-1"></i> 4 Hours Ago
                  </p>
                </div>
              </div>
            </a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item">
              <div className="media">
                <img
                  src="../../dist/img/user8-128x128.jpg"
                  alt="User Avatar"
                  className="img-size-50 img-circle mr-3"
                />
                <div className="media-body">
                  <h3 className="dropdown-item-title">
                    John Pierce
                    <span className="float-right text-sm text-muted">
                      <i className="fas fa-star"></i>
                    </span>
                  </h3>
                  <p className="text-sm">I got your message bro</p>
                  <p className="text-sm text-muted">
                    <i className="far fa-clock mr-1"></i> 4 Hours Ago
                  </p>
                </div>
              </div>
            </a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item">
              <div className="media">
                <img
                  src="../../dist/img/user3-128x128.jpg"
                  alt="User Avatar"
                  className="img-size-50 img-circle mr-3"
                />
                <div className="media-body">
                  <h3 className="dropdown-item-title">
                    Nora Silvester
                    <span className="float-right text-sm text-warning">
                      <i className="fas fa-star"></i>
                    </span>
                  </h3>
                  <p className="text-sm">The subject goes here</p>
                  <p className="text-sm text-muted">
                    <i className="far fa-clock mr-1"></i> 4 Hours Ago
                  </p>
                </div>
              </div>
            </a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item dropdown-footer">
              See All Messages
            </a>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link" data-toggle="dropdown" href="#">
            <i className="far fa-bell"></i>
            <span className="badge badge-warning navbar-badge">15</span>
          </a>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <span className="dropdown-item dropdown-header">
              15 Notifications
            </span>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item">
              <i className="fas fa-envelope mr-2"></i> 4 new messages
              <span className="float-right text-muted text-sm">3 mins</span>
            </a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item">
              <i className="fas fa-users mr-2"></i> 8 friend requests
              <span className="float-right text-muted text-sm">12 hours</span>
            </a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item">
              <i className="fas fa-file mr-2"></i> 3 new reports
              <span className="float-right text-muted text-sm">2 days</span>
            </a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item dropdown-footer">
              See All Notifications
            </a>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link cursor-pointer"
            onClick={() => {
              !userDropdown ? setuserDropdown(true) : setuserDropdown(false);
            }}
            id="userDropDown"
          >
            <i className="far fa-user"></i> Ashutosh Sharma
            <i className="fas fa-chevron-down"></i>
          </a>
          {userDropdown ? (
            <div
              className="d-block dropdown-menu dropdown-menu-lg dropdown-menu-right"
              style={{ left: "inherit", right: "0 px" }}
            >
              <a className="dropdown-item dropdown-footer">
                <p>Role</p>
              </a>

              <div className="dropdown-divider"></div>
              <a
                onClick={logout}
                className="dropdown-item dropdown-footer cursor-pointer"
              >
                Logout
              </a>
            </div>
          ) : (
            ""
          )}
        </li>
      </ul>
    </nav>
  );
};

export default observer(HeaderComponent);
