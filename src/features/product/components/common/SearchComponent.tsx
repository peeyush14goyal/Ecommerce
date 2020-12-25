import React from 'react'
import { Form, Field } from "react-final-form";
import TextInput from "../../../../app/common/form/TextInput";
interface IProps {

}

const SearchComponent: React.FC<any> = (props) => {

    const onSearch = (values: any) => {
        console.log(values);
        props.emitSearchParams(values);
    }
    return (
        <>
            <div className="card card-default">
                <div className="card-header">
                    <h3 className="card-title">Product Search</h3>
                    <div className="card-tools">
                        <button type="button" className="btn btn-tool">
                            <i className="fas fa-minus"></i>
                        </button>
                    </div>
                </div>
                <Form
                    onSubmit={(values: any) => onSearch(values)}
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
                                                <label htmlFor="exampleInputEmail1">Name</label>
                                                <Field
                                                    name="name"
                                                    component={TextInput}
                                                    placeholder="Name"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Category</label>
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
                                                                {props.categories &&
                                                                    <>
                                                                        {props.categories.map((a: any) => (
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
                                        {/* categories */}
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">SKU</label>
                                                <Field
                                                    name="sku"
                                                    component={TextInput}
                                                    placeholder="SKU"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-3" style={{ margin: 'auto' }}>
                                            <div className="form-group mb-0">
                                                {/* <div className="custom-control custom-checkbox">
                                                    <input className="custom-control-input" type="checkbox" id="customCheckbox2" />
                                                    <label htmlFor="customCheckbox2"
                                                        className="custom-control-label">
                                                        Published
                                            </label>
                                                </div> */}
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
                                                                checked={props?.published}
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
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 text-right mt-2" >
                                            <button type="button" className="btn btn-outline-secondary mr-2">Reset</button>
                                            <button type="submit" className="btn btn-primary">Search</button></div>
                                    </div>

                                </div>
                            </form>
                        )} />
            </div>

        </>
    )
}

export default SearchComponent;