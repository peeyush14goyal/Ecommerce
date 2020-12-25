import React from 'react';
import Pager from '../../../app/common/table/Pager';
import { IPagedCustomer } from '../../../app/models/customer';

interface IProps {
    pagedData: IPagedCustomer;
    currentPage: number;
    onSortDirection: (sortDirection: string) => void;
    onPageChange: (currentPage: any) => void;
  }

const List:React.FC<IProps> = ({
  pagedData,
  currentPage,
  onSortDirection,
  onPageChange
}) => {
    return (
        <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <div className="card-title">
              <div className="d-md-flex align-items-center">
                <select className="form-control form-control-sm">
                  <option>Name</option>
                  <option>Email</option>
                  <option>Mobile</option>
                </select>
                <div className="d-flex align-items-center">
                  <span
                    className="btn"
                    title="Ascending order"
                    onClick={() => onSortDirection("Asc")}
                  >
                    <i className="fas far fa-sort-amount-up"></i>
                  </span>
                  <span
                    className="btn"
                    title="Descending order"
                    onClick={() => onSortDirection("Desc")}
                  >
                    <i className="fas far fa-sort-amount-down"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body table-responsive p-0">
            <table className="table table-sm table-striped text-nowrap">
              <thead className="bg-gradient-primary">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Address</th>
                  <th>Pincode</th>
                  <th>Reseller</th>
                  <th>Reseller Details</th>
                </tr>
              </thead>
              <tbody>
                {pagedData &&
                  pagedData.customers.map((customer) => (
                    <tr key={customer.id}>
                      <td>{customer.name}</td>
                      <td>{customer.email}</td>
                      <td>{customer.mobile}</td>
                      <td>{customer.address}, {customer.city}, {customer.locality} </td>
                  <td>{customer.pincode}</td>
                      <td>{customer.reseller.name}</td>
                  <td>{customer.reseller.address},{customer.reseller.city},{customer.reseller.locality}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className="card-footer clearfix">
            {pagedData && (
              <Pager
                pageSize={2}
                totalItemsCount={pagedData!.rowCount}
                activePage={currentPage}
                onPageChange={onPageChange}
              />
            )}
          </div>
        </div>
      </div>
    </div>
    )
}

export default List;