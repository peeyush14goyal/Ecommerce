import React from "react";
import { Form, Field } from "react-final-form";
import TextInput from "../../../app/common/form/TextInput";
import { ICategorySearch } from "../../../app/models/category";
import { ICustomerSearch } from "../../../app/models/customer";

interface IProps {
  onSearch: (searchValue: ICustomerSearch) => void;
}

const Search: React.FC<IProps> = ({ onSearch }) => {
  return (
    <div className="container-fluid">
      <div className="card card-default">
        <div className="card-header pt-2 pb-2 pt-md-2 pb-md-2">
          <h3 className="card-title">Customer Search</h3>
          <div className="card-tools">
            <button type="button" className="btn btn-tool">
              <i className="fas fa-minus"></i>
            </button>
          </div>
        </div>

        <Form
          onSubmit={(values: ICustomerSearch) => onSearch(values)}
          render={({
            handleSubmit,
            submitting,
            submitError,
            invalid,
            pristine,
            dirtySinceLastSubmit,
          }) => (
            <form onSubmit={handleSubmit} autoComplete="off">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-3">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <Field
                        name="name"
                        component={TextInput}
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label htmlFor="name">Mobile</label>
                      <Field
                        name="name"
                        component={TextInput}
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label htmlFor="name">Email</label>
                      <Field
                        name="name"
                        component={TextInput}
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-3 text-right" style={{marginTop:28}}>
                    <button type="button" className="btn btn-outline-secondary mr-2">
                      Reset
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}
        />
      </div>
    </div>
  );
};

export default Search;
