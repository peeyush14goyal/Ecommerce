import React, { useState } from "react";

interface IProps {
  pageSize: number;
  totalItemsCount: number;
  activePage:number;
  onPageChange: (activePage:number) => void
}

const Pager: React.FC<IProps> = ({pageSize, totalItemsCount, activePage, onPageChange}) => {
  
  const[page,setPage]=useState({
    totalPages:Math.ceil(totalItemsCount / pageSize),
    currentPage:activePage,
    startPage:activePage - 5,
    endPage: activePage + 4
  });

  return (
      <ul className="pagination pagination-sm m-0 float-right">
        {
          [...Array(page.totalPages).keys()].map(a=>(
            <li key={a} style={{cursor:"pointer"}} className={(a+1)===activePage?"page-item active":"page-item"}
             onClick={()=>onPageChange(a+1)}>
            <a className="page-link">
              {a+1}
            </a>
          </li>
          ))
        }
      </ul>
  );
};

export default Pager;
