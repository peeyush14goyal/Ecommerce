import React, { useState } from 'react';
import Pager from "../../../app/common/table/Pager";
import SearchComponent from './common/SearchComponent';

const ProductListContainer = (props: any) => {
    const [currentPage, setCurrentPage] = useState(1)
    const _handlePage = (currentPage: any) => {
        console.log('currentPage', currentPage);
        props.emitSetCurrentPage(currentPage)
    }


    const onProductAddEvent = () => {
        props.emitAddProductEvent();
    }

    const getEmitedSearchParams = (event: any) => {
        props.emitSearchParams(event);
    }

    return (
        <>
            <div className="row pt-2">
                <div className="col-12">
                </div>
                <div className="col-12">
                    <SearchComponent
                        categories={props.categories}
                        emitSearchParams={(e: any) => getEmitedSearchParams(e)}>
                    </SearchComponent>
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Product List</h3>
                            <div className="card-tools" style={{ display: 'flex' }}>
                                <button type="button"
                                    onClick={() => onProductAddEvent()}
                                    className="btn btn-block btn-outline-primary btn-sm mr-1">
                                    <i className="fas fa-plus"></i>
                                </button>
                                {/* <button type="button"
                                    className="btn btn-block btn-outline-danger btn-sm m-0">
                                    <i className="fas fa-trash"></i>
                                </button> */}
                            </div>

                        </div>
                        <div className="line-loader" style={{ display: props.isListLoading ? '' : 'none' }}></div>
                        <div className="card-body table-responsive p-0" style={{ height: '48vh' }}>
                            <table className="table table-head-fixed text-nowrap">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Unit</th>
                                        <th>Price</th>
                                        <th>Old Price</th>
                                        <th>Price Range</th>
                                        <th>Cart Quantity(min-max)</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {props.pagedProducts && props.pagedProducts.products.map((indProduct: any, i: any) =>
                                        <tr key={i}>
                                            <td>
                                                <div className="form-check form-check-danger">
                                                    <label className="form-check-label">
                                                        <input type="checkbox"
                                                            className="form-check-input"
                                                            name="deleteRadio"
                                                            id="optionsRadios1"
                                                            value="" /> </label>
                                                </div>
                                            </td>
                                            <td><img
                                                src={`http://103.212.120.200:80/Docs/products/thumbnail/${indProduct.defaultPicture}`}
                                                width="48" alt="Product img" />
                                            </td>
                                            <td>{indProduct.name}<span className="d-block text-gray mt-1"><small>Apple Shimla</small></span></td>
                                            <td>{indProduct.Unit}</td>
                                            <td>₹{indProduct.price}</td>
                                            <td> ₹{indProduct.oldPrice} </td>
                                            <td>  {indProduct.priceRange} </td>
                                            <td> {indProduct.minimumCartQuantity}-{indProduct.maximumCartQuantity} </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {props.pagedProducts && (
                        <Pager
                            pageSize={10}
                            totalItemsCount={props.pagedProducts!.rowCount}
                            activePage={props.currentPage}
                            onPageChange={_handlePage} />
                    )}
                </div>
            </div>

        </>
    )
}

export default ProductListContainer;

{/* <td style={{ width: "30%" }}>
                                            <ul className="preview-thumbnail nav">
                                                <li className="nav-item" style={{ width: '20%' }}>
                                                    <a href="#" data-toggle="tab" className="nav-link active">
                                                        <img src="http://wrraptheme.com/templates/lucid/angular/assets/images/ecommerce/5.png"
                                                            className="img-fluid" /></a>
                                                </li>
                                                <li className="nav-item" style={{ width: '20%' }}>
                                                    <a href="#" data-toggle="tab" className="nav-link">
                                                        <img src="http://wrraptheme.com/templates/lucid/angular/assets/images/ecommerce/11.png"
                                                            className="img-fluid" /></a>
                                                </li>
                                                <li className="nav-item" style={{ width: '20%' }}> <a href="#" data-toggle="tab"
                                                    className="nav-link"><img src="http://wrraptheme.com/templates/lucid/angular/assets/images/ecommerce/10.png"
                                                        className="img-fluid" /></a>
                                                </li>
                                            </ul>
                                        </td> */}