import React, { Fragment, useState, useEffect } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PhotoWidgetDropzone from "../../../app/common/photoUpload/PhotoWidgetDropzone";
import TextInput from "../../../app/common/form/TextInput";
import TextAreaInput from "../../../app/common/form/TextAreaInput";
import DateInput from '../../../app/common/form/DateInput';
import { Field, Form } from "react-final-form";
import { FORM_ERROR } from "final-form";
import { combineValidators, isRequired } from "revalidate";
import ErrorMessage from "../../../app/common/form/ErrorMessage";


const validate = combineValidators({
    name: isRequired("Name"),
    minimumCartQuantity: isRequired("Minimum Cart Quantity"),
    maximumCartQuantity: isRequired("Maximum Cart Quantity"),
});
interface IProps {

}

const ProductFormComponent: React.FC<any> = (props) => {
    const [files, setFiles] = useState<any[]>([]);
    const handleUploadImage = (photo: Blob) => {
        console.log('photo', photo);
    };

    const getDateChangeEvent = (event: any) => {
        console.log(event);
    }

    const addProduct = (values: any) => {
        console.log(values)
        props.emitFormData(values);
    }

    return (
        <>
            <div className="row pt-2">
                <Form
                    onSubmit={(values: any) =>
                        addProduct(values)
                    }
                    validate={validate}
                    render={({
                        handleSubmit,
                        submitting,
                        submitError,
                        dirtySinceLastSubmit,
                    }) => (
                            <form onSubmit={handleSubmit} autoComplete="off">
                                <div className="col-12">
                                    <div className="card card-default">
                                        <div className="card-header">
                                            <h3 className="card-title">Product Information</h3>

                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                    <i className="fas fa-minus"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-lg-6 col-sm-12">
                                                    <label htmlFor="name">Name</label>
                                                    <Field
                                                        name="name"
                                                        component={TextInput}
                                                        placeholder="Name"
                                                    />
                                                </div>
                                                <div className="col-lg-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label htmlFor="name">Shot Description</label>
                                                        <Field
                                                            name="shortDescription"
                                                            component={TextInput}
                                                            placeholder="Short Description"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label htmlFor="name">Full Description</label>
                                                        <Field
                                                            name="fullDescription"
                                                            component={TextAreaInput}
                                                            placeholder="Full Description"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label htmlFor="name">SKU</label>
                                                        <Field
                                                            name="sku"
                                                            component={TextInput}
                                                            placeholder="Enter SKU"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label htmlFor="name">Category</label>
                                                        <Field
                                                            name="categoryId"
                                                            component="input"
                                                            placeholder="Category"
                                                            defaultValue={''}
                                                        >
                                                            {({ input, meta }) => (
                                                                <div className="form-group">
                                                                    <select className="form-control form-control-sm" {...input}>
                                                                        <option value="">Select Category</option>
                                                                        {props.categoryList &&
                                                                            <>
                                                                                {props.categoryList.map((a: any) => (
                                                                                    <option key={a.id} value={a.id}>{a.name}</option>
                                                                                ))
                                                                                }
                                                                            </>
                                                                        }
                                                                    </select>
                                                                </div>
                                                            )}
                                                        </Field>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-sm-12">
                                                    <div className="form-group row">
                                                        <label className="col-12" htmlFor="name">AvailableStartDate</label>
                                                        <div className="col-12">
                                                            <Field
                                                                name="availableStartDate"
                                                                date={true}
                                                                time={false}
                                                                component={DateInput}
                                                                placeholder="Select Start Date"
                                                            />
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-sm-12">
                                                    <div className="form-group row">
                                                        <label className="col-12" htmlFor="name">AvailableEndDate</label>
                                                        <div className="col-12">
                                                            <Field
                                                                name="availableEndDate"
                                                                date={true}
                                                                time={false}
                                                                component={DateInput}
                                                                placeholder="Select End Date"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label htmlFor="name">Stock Quantity</label>
                                                        <Field
                                                            type="number"
                                                            name="stockQuantity"
                                                            component={TextInput}
                                                            placeholder="Enter Stock Quantity"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label htmlFor="name">Minimum Stock Quantity</label>
                                                        <input
                                                            type="text"
                                                            className="form-control form-control-sm"
                                                            id="name"
                                                            placeholder="Enter Stock Quantity"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label htmlFor="name">Minimum Cart Qty</label>
                                                        <Field
                                                            type="number"
                                                            name="minimumCartQuantity"
                                                            component={TextInput}
                                                            placeholder="Enter Minimum Cart Quantity"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label htmlFor="name">Maximum Cart Qty</label>
                                                        <Field
                                                            type="number"
                                                            name="maximumCartQuantity"
                                                            component={TextInput}
                                                            placeholder="Enter Maximum Cart Quantity"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">

                                    <div className="card card-default">
                                        <div className="card-header">
                                            <h3 className="card-title">Product Price</h3>

                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                    <i className="fas fa-minus"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="card-body row">
                                            <div className="col-lg-6 col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="name">Price</label>
                                                    <Field
                                                        type="number"
                                                        name="price"
                                                        component={TextInput}
                                                        placeholder="Enter price"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="name">Old Price</label>
                                                    <Field
                                                        type="number"
                                                        name="oldPrice"
                                                        component={TextInput}
                                                        placeholder="Enter Old Price"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="name">Product Cost</label>
                                                    <Field
                                                        type="number"
                                                        name="productCost"
                                                        component={TextInput}
                                                        placeholder="Enter Product Cost"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="name">Discount</label>
                                                    <Field
                                                        type="number"
                                                        name="discount"
                                                        component={TextInput}
                                                        placeholder="Enter Discount"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-12">

                                    <div className="card card-default">
                                        <div className="card-header">
                                            <h3 className="card-title">View Config</h3>

                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                    <i className="fas fa-minus"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="card-body row">
                                            <div className="col-lg-6 col-sm-12">
                                                <div className="form-group">
                                                    <Field type="checkbox"
                                                        name="published"
                                                        component="input"
                                                    >
                                                        {({ input, meta }) => (
                                                            <div className="custom-control custom-checkbox">
                                                                <input
                                                                    {...input}
                                                                    className="custom-control-input"
                                                                    type="checkbox"
                                                                    id="published"
                                                                    checked={props?.product?.published}
                                                                />
                                                                <label
                                                                    htmlFor="published"
                                                                    className="custom-control-label"
                                                                >
                                                                    Published
                                                                </label>
                                                            </div>
                                                        )}
                                                    </Field>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-sm-12">
                                                <div className="form-group">
                                                    <Field type="checkbox"
                                                        name="showOnHomePage"
                                                        component="input"
                                                    >
                                                        {({ input, meta }) => (
                                                            <div className="custom-control custom-checkbox">
                                                                <input
                                                                    {...input}
                                                                    className="custom-control-input"
                                                                    type="checkbox"
                                                                    id="showOnHomePage"
                                                                    checked={props?.product?.showOnHomePage}
                                                                />
                                                                <label
                                                                    htmlFor="showOnHomePage"
                                                                    className="custom-control-label"
                                                                >
                                                                    Show On HomePage
                                                                </label>
                                                            </div>
                                                        )}
                                                    </Field>

                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-sm-12">
                                                <div className="form-group">
                                                    <Field type="checkbox"
                                                        name="allowCustomerReview"
                                                        component="input"
                                                    >
                                                        {({ input, meta }) => (
                                                            <div className="custom-control custom-checkbox">
                                                                <input
                                                                    {...input}
                                                                    className="custom-control-input"
                                                                    type="checkbox"
                                                                    id="allowCustomerReview"
                                                                    checked={props?.product?.allowCustomerReview}
                                                                />
                                                                <label
                                                                    htmlFor="allowCustomerReview"
                                                                    className="custom-control-label"
                                                                >
                                                                    Allow Customer Review
                                                                </label>
                                                            </div>
                                                        )}
                                                    </Field>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-sm-12">
                                                <div className="form-group">
                                                    <Field type="checkbox"
                                                        name="markAsNew"
                                                        component="input"
                                                    >
                                                        {({ input, meta }) => (
                                                            <div className="custom-control custom-checkbox">
                                                                <input
                                                                    {...input}
                                                                    className="custom-control-input"
                                                                    type="checkbox"
                                                                    id="markAsNew"
                                                                    checked={props?.product?.markAsNew}
                                                                />
                                                                <label
                                                                    htmlFor="markAsNew"
                                                                    className="custom-control-label"
                                                                >
                                                                    Allow Customer Review
                                                                </label>
                                                            </div>
                                                        )}
                                                    </Field>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-sm-12">
                                                <div className="form-group">
                                                    <Field type="checkbox"
                                                        name="disableBuyButton"
                                                        component="input"
                                                    >
                                                        {({ input, meta }) => (
                                                            <div className="custom-control custom-checkbox">
                                                                <input
                                                                    {...input}
                                                                    className="custom-control-input"
                                                                    type="checkbox"
                                                                    id="disableBuyButton"
                                                                    checked={props?.product?.disableBuyButton}
                                                                />
                                                                <label
                                                                    htmlFor="disableBuyButton"
                                                                    className="custom-control-label"
                                                                >
                                                                    Disable Buy Button
                                                                </label>
                                                            </div>
                                                        )}
                                                    </Field>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-sm-12">
                                                <div className="form-group">
                                                    <Field type="checkbox"
                                                        name="disableWishList"
                                                        component="input"
                                                    >
                                                        {({ input, meta }) => (
                                                            <div className="custom-control custom-checkbox">
                                                                <input
                                                                    {...input}
                                                                    className="custom-control-input"
                                                                    type="checkbox"
                                                                    id="disableWishList"
                                                                    checked={props?.product?.disableWishList}
                                                                />
                                                                <label
                                                                    htmlFor="disableWishList"
                                                                    className="custom-control-label"
                                                                >
                                                                    Disable Wish List
                                                                </label>
                                                            </div>
                                                        )}
                                                    </Field>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-sm-12">
                                                <div className="form-group">

                                                    <Field type="checkbox"
                                                        name="taxExempt"
                                                        component="input"
                                                    >
                                                        {({ input, meta }) => (
                                                            <div className="custom-control custom-checkbox">
                                                                <input
                                                                    {...input}
                                                                    className="custom-control-input"
                                                                    type="checkbox"
                                                                    id="taxExempt"
                                                                    checked={props?.product?.disableWishList}
                                                                />
                                                                <label
                                                                    htmlFor="taxExempt"
                                                                    className="custom-control-label"
                                                                >
                                                                    Tax Exempt
                                                                </label>
                                                            </div>
                                                        )}
                                                    </Field>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-sm-12">
                                                <div className="form-group">
                                                    <Field type="checkbox"
                                                        name="notReturnable"
                                                        component="input"
                                                    >
                                                        {({ input, meta }) => (
                                                            <div className="custom-control custom-checkbox">
                                                                <input
                                                                    {...input}
                                                                    className="custom-control-input"
                                                                    type="checkbox"
                                                                    id="notReturnable"
                                                                    checked={props?.product?.disableWishList}
                                                                />
                                                                <label
                                                                    htmlFor="notReturnable"
                                                                    className="custom-control-label"
                                                                >
                                                                    Not Returnable
                                                                </label>
                                                            </div>
                                                        )}
                                                    </Field>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-sm-12">
                                                <div className="form-group">
                                                    <Field type="checkbox"
                                                        name="displayAvailablity"
                                                        component="input"
                                                    >
                                                        {({ input, meta }) => (
                                                            <div className="custom-control custom-checkbox">
                                                                <input
                                                                    {...input}
                                                                    className="custom-control-input"
                                                                    type="checkbox"
                                                                    id="displayAvailablity"
                                                                    checked={props?.product?.disableWishList}
                                                                />
                                                                <label
                                                                    htmlFor="displayAvailablity"
                                                                    className="custom-control-label"
                                                                >
                                                                    Display Availablity
                                                                </label>
                                                            </div>
                                                        )}
                                                    </Field>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-12 mb-2">
                                    <div className=" text-center">
                                        {submitError && !dirtySinceLastSubmit && (
                                            <ErrorMessage
                                                error={submitError}
                                                text="Error during sumit your form."
                                            />
                                        )}
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            Save
                          </button>
                                    </div>
                                </div>
                            </form>)}
                />

                <div className="col-12">
                    <div className="card card-default">
                        <div className="card-header">
                            <h3 className="card-title">Product Image</h3>

                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                    <i className="fas fa-minus"></i>
                                </button>
                            </div>
                        </div>
                        <div className="card-body row">
                            <div className="col-lg-6 col-sm-12">
                                <PhotoWidgetDropzone setFiles={setFiles} />
                            </div>
                        </div>
                    </div>

                    {/* <PhotoUploadWidget
                        uploadPhoto={handleUploadImage}
                        loading={false}
                    /> */}
                    {/* <div className="card card-default">
                        <div className="card card-default">
                            <div className="card-header">
                                <h3 className="card-title">Product Image</h3>

                                <div className="card-tools">
                                    <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                        <i className="fas fa-minus"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">

                            </div>
                        </div>
                    </div> */}
                </div>

            </div>

        </>
    )
}

export default ProductFormComponent;