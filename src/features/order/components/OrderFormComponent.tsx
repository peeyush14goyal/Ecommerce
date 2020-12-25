import React, { Fragment, useContext, useEffect, useState } from 'react'
import TextInput from "../../../app/common/form/TextInput";
import TextAreaInput from "../../../app/common/form/TextAreaInput";
import DateInput from '../../../app/common/form/DateInput';
import { Field, Form } from "react-final-form";
import { FORM_ERROR } from "final-form";
import { combineValidators, isRequired } from "revalidate";
import ErrorMessage from "../../../app/common/form/ErrorMessage";

interface IProps {

}

// "orderNumber":null,
//     "startDate":null,
//     "endDate":null,
//     "product":null,
//     "orderStatus":"1",
//     "paymentStatus":"1",
//     "shippingStatus":"1",
//     "billingPhoneNumber":"9917155321",
//     "billingEmail":null,
//     "billingName":null



const OrderFormComponent = (props: any) => {


    const searchOrder = (values: any) => {
        console.log(values);

    }

    return (
        <>
            <div className="row pt-2">
                <div className="col-12">

                    <div className="card p-3">

                        <Form
                            onSubmit={(values: any) =>
                                searchOrder(values)
                            }
                            render={({
                                handleSubmit,
                                submitting,
                                submitError,
                                dirtySinceLastSubmit,
                            }) => (
                                    <div className="card-body table-responsive p-0">

                                        <form onSubmit={handleSubmit} autoComplete="off">
                                            <div className="row">
                                                <div className="col-lg-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label htmlFor="name">Order Number</label>
                                                        <Field
                                                            type="text"
                                                            name="orderNumber"
                                                            component={TextInput}
                                                            placeholder="Enter Order Number"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label htmlFor="name">Start Date</label>
                                                        <Field
                                                            name="startDate"
                                                            date={true}
                                                            time={false}
                                                            component={DateInput}
                                                            placeholder="Select Start Date"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label htmlFor="name">End Date</label>
                                                        <Field
                                                            name="endDate"
                                                            date={true}
                                                            time={false}
                                                            component={DateInput}
                                                            placeholder="Select End Date"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label htmlFor="name">Product</label>
                                                        <Field
                                                            type="text"
                                                            name="product"
                                                            component={TextInput}
                                                            placeholder="Enter product"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label htmlFor="name">Order Status</label>
                                                        <Field
                                                            name="orderStatus"
                                                            component="input"
                                                            placeholder="Order Status"
                                                            defaultValue={''}
                                                        >
                                                            {({ input, meta }) => (
                                                                <div className="form-group">
                                                                    <select className="form-control form-control-sm" {...input}>
                                                                        <option value="">Order Status</option>
                                                                        <option value="pending">Pending</option>
                                                                        <option value="delivered">Delivered</option>
                                                                        <option value="shipped">Shipped</option>
                                                                        <option value="completed">Completed</option>
                                                                        <option value="refunded">Refunded</option>
                                                                        <option value="cancelled">Cancelled</option>
                                                                    </select>
                                                                </div>
                                                            )}
                                                        </Field>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label htmlFor="name">Payment Status</label>
                                                        <Field
                                                            name="paymentStatus"
                                                            component="input"
                                                            placeholder="Payment Status"
                                                            defaultValue={''}
                                                        >
                                                            {({ input, meta }) => (
                                                                <div className="form-group">
                                                                    <select className="form-control form-control-sm" {...input}>
                                                                        <option value="">Order Status</option>
                                                                        <option value="pending">Pending</option>
                                                                        <option value="success">Success</option>
                                                                        <option value="complete">Complete</option>
                                                                        <option value="canceled">Canceled</option>
                                                                        <option value="rejected">Rejected</option>
                                                                    </select>
                                                                </div>
                                                            )}
                                                        </Field>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label htmlFor="name">Shipping Status</label>
                                                        <Field
                                                            name="shippingStatus"
                                                            component="input"
                                                            placeholder="Shipping Status"
                                                            defaultValue={''}
                                                        >
                                                            {({ input, meta }) => (
                                                                <div className="form-group">
                                                                    <select className="form-control form-control-sm" {...input}>
                                                                        <option value="">Order Status</option>
                                                                        <option value="not yet shipped">Not Yet Shipped</option>
                                                                        <option value="success">Success</option>
                                                                        <option value="complete">Complete</option>
                                                                        <option value="canceled">Canceled</option>
                                                                        <option value="rejected">Rejected</option>
                                                                    </select>
                                                                </div>
                                                            )}
                                                        </Field>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label htmlFor="name">Billing Phone Number</label>
                                                        <Field
                                                            type="number"
                                                            name="billingPhoneNumber"
                                                            component={TextInput}
                                                            placeholder="Enter Billing Phone number"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label htmlFor="name">Billing Phone Number</label>
                                                        <Field
                                                            type="email"
                                                            name="billingEmail"
                                                            component={TextInput}
                                                            placeholder="Enter Billing Phone number"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label htmlFor="name">Billing Name</label>
                                                        <Field
                                                            type="text"
                                                            name="billingName"
                                                            component={TextInput}
                                                            placeholder="Enter Billing Name"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
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
                                            </div>

                                        </form>
                                    </div>
                                )}
                        />

                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderFormComponent;