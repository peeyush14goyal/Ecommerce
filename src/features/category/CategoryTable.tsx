import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import Pager from "../../app/common/table/Pager";
import { ICategory, IPagedCategory } from "../../app/models/category";

interface IProps {
  pagedData: IPagedCategory;
  currentPage: number;
  editItemSelected: boolean;
  sortDirection: (sortDirection: string) => void;
  onPageChange: (currentPage: any) => void;
  onSelectItem: (checked: boolean, category: ICategory) => void;
  onAdd: () => void;
}

const CategoryTable: React.FC<IProps> = ({
  pagedData,
  currentPage,
  editItemSelected,
  sortDirection,
  onPageChange,
  onSelectItem,
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
                </select>
                <div className="d-flex align-items-center">
                  <span
                    className="btn"
                    title="Ascending order"
                    onClick={() => sortDirection("Asc")}
                  >
                    <i className="fas far fa-sort-amount-up"></i>
                  </span>
                  <span
                    className="btn"
                    title="Descending order"
                    onClick={() => sortDirection("Desc")}
                  >
                    <i className="fas far fa-sort-amount-down"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="card-tools">
              <Link
                className="btn btn-tool"
                to={editItemSelected ? "/add-category" : "#"}
              >
                <i className="fas fa-edit"></i>
              </Link>
              <Link className="btn btn-tool" onClick={onAdd} to="/add-category">
                <i className="fas fa-plus"></i>
              </Link>
            </div>
          </div>
          <div className="card-body table-responsive p-0">
            <table className="table table-sm table-striped text-nowrap">
              <thead className="bg-gradient-primary">
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Published</th>
                  <th>Show on Home Screen</th>
                  <th>Sort Order</th>
                </tr>
              </thead>
              <tbody>
                {pagedData &&
                  pagedData.categories.map((category) => (
                    <tr key={category.id}>
                      <td>
                        <input
                          type="checkbox"
                          className="form-check-input ml-1"
                          id={category.id}
                          onClick={(e) =>
                            onSelectItem(e.currentTarget.checked, category)
                          }
                        />
                      </td>
                      <td><img
                              src={`${process.env.REACT_APP_IMAGE_URL}/Categories/thumbnail/${category.picture}`}
                              width="48" alt="Product img" /></td>
                      <td>{category.name}</td>
                      <td>{category.description}</td>
                      <td>
                        {category.isPublished ? (
                          <span className="badge bg-success">Yes</span>
                        ) : (
                          <span className="badge bg-danger">No</span>
                        )}
                      </td>
                      <td>
                        {category.showOnHomeScreen ? (
                          <span className="badge bg-success">Yes</span>
                        ) : (
                          <span className="badge bg-danger">No</span>
                        )}
                      </td>
                      <td>{category.displayOrder}</td>
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
  );
};

export default observer(CategoryTable);
