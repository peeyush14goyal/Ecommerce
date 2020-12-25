import React, { Fragment } from "react";
import InfoBox from "./InfoBox";
import {Bar} from 'react-chartjs-2';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Orders',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };

const DashboardPage = () => {
  return (
    <Fragment>
      
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Dashboard</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-3">
              <InfoBox />
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <InfoBox />
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <InfoBox />
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <InfoBox />
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-header border-0">
                  <div className="d-flex justify-content-between">
                    <h3 className="card-title">Orders</h3>
                    <a href="javascript:void(0);">View Report</a>
                  </div>
                </div>
                <div className="card-body">
                  <div className="d-flex">
                    <p className="d-flex flex-column">
                      <span className="text-bold text-lg">820</span>
                      <span>Orders</span>
                    </p>
                    <p className="ml-auto d-flex flex-column text-right">
                      <span className="text-success">
                        <i className="fas fa-arrow-up"></i> 12.5%
                      </span>
                      <span className="text-muted">Since last week</span>
                    </p>
                  </div>
                  <div className="position-relative mb-4">
                    <Bar
                        data={data}
                        width={666}
                        height={300}
                        options={{
                            maintainAspectRatio: false
                        }}
                        />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
            <div className="card">
                <div className="card-header border-0">
                  <div className="d-flex justify-content-between">
                    <h3 className="card-title">New Customers</h3>
                    <a href="javascript:void(0);">View Report</a>
                  </div>
                </div>
                <div className="card-body">
                  <div className="d-flex">
                    <p className="d-flex flex-column">
                      <span className="text-bold text-lg">820</span>
                      <span>New Customers</span>
                    </p>
                    <p className="ml-auto d-flex flex-column text-right">
                      <span className="text-success">
                        <i className="fas fa-arrow-up"></i> 12.5%
                      </span>
                      <span className="text-muted">Since last week</span>
                    </p>
                  </div>
                  <div className="position-relative mb-4">
                    <Bar
                        data={data}
                        width={666}
                        height={300}
                        options={{
                            maintainAspectRatio: false
                        }}
                        />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </Fragment>
    
  );
};

export default DashboardPage;
