import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import Pager from "../../../app/common/table/Pager";
import { IPagedUser } from "../../../app/models/user";

interface IProps {
    pagedData: IPagedUser;
    currentPage: number;
    onSortDirection: (sortDirection: string) => void;
    onPageChange: (currentPage: any) => void;
    onAdd: () => void;
  }

const List: React.FC<IProps> = ({
    pagedData,
    currentPage,
    onSortDirection,
    onPageChange,
    onAdd,
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
            <div className="card-tools">
              <Link className="btn btn-tool" onClick={onAdd} to="/register-user">
                <i className="fas fa-plus"></i>
              </Link>
            </div>
          </div>
          <div className="card-body table-responsive p-0">
            <table className="table table-sm table-striped text-nowrap">
              <thead className="bg-gradient-primary">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <td>Dob</td>
                  <td>Address</td>
                  <th>Is Active</th>
                </tr>
              </thead>
              <tbody>
                {pagedData &&
                  pagedData.users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.mobile}</td>
                      <td>{user.dob}</td>
                      <td>{user.address}, {user.city}</td>
                      <td>
                        {user.isActive ? (
                          <span className="badge bg-success">Yes</span>
                        ) : (
                          <span className="badge bg-danger">No</span>
                        )}
                      </td>
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

export default observer(List);
