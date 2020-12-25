import React from "react";

const Actions = () => {
  return (
    <div className="col-md-2 float-right">
      <button type="button" className="btn btn-default btn-sm">
        <i className="fas fa-plus"></i>
      </button>
      <button type="button" className="btn btn-default btn-sm">
        <i className="fas fa-edit"></i>
      </button>
      <button type="button" className="btn btn-default btn-sm">
        <i className="fas fa-download"></i>
      </button>
    </div>
  );
};

export default Actions;