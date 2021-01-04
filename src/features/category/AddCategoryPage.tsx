import { FORM_ERROR } from "final-form";
import { observer } from "mobx-react-lite";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { Field, Form } from "react-final-form";
import { combineValidators, isRequired } from "revalidate";
import ErrorMessage from "../../app/common/form/ErrorMessage";
import TextAreaInput from "../../app/common/form/TextAreaInput";
import TextInput from "../../app/common/form/TextInput";
import PhotoUploadWidget from "../../app/common/photoUpload/PhotoUploadWidget";
import BreadCrumb from "../../app/layout/BreadCrumb";
import { ICategory } from "../../app/models/category";
import { RootStoreContext } from "../../app/stores/rootStore";

const validate = combineValidators({
  name: isRequired("Name"),
});

const AddCategoryPage = () => {
  const rootStore = useContext(RootStoreContext);
  const {
    category,
    addCategory,
    categories,
    allCategories,
    edited,
  } = rootStore.categoryStore;

  const [imageUpload, setImageUpload] = useState(false);
  const [image, setImage] = useState<Blob | null>(null);

  const handleUploadImage = (photo: Blob) => {
    console.log("photo", photo);
    setImage(photo);
  };

  const handleAddSubmit = (values: ICategory) => {
    const addValue: ICategory = {
      id: "2",
      name: values.name,
      description: values?.description,
      picture: values?.picture,
      priceRange: values?.priceRange,
      isPublished: values?.isPublished,
      showOnHomeScreen: values?.showOnHomeScreen,
      parentCategoryId: values?.parentCategoryId,
      displayOrder: values?.displayOrder,
    };
    console.log(addValue);
    addCategory(addValue);
  };

  useEffect(() => {
    allCategories();
  }, [allCategories]);

  return (
    <Fragment>
      <BreadCrumb pageName={edited ? "Edit Category" : "Add Category"} />

      <section className="content">
        <div className="row">
          <div className="col-md-12">
            <div className="card card-primary">
              <div className="card-header pt-2 pb-2">
                <h3 className="card-title">
                  {edited ? "Edit Category" : "Add Category"}
                </h3>
              </div>
              <div className="card-body">
                <Form
                  onSubmit={(values: ICategory) => {
                    handleAddSubmit(values);
                    // addCategory(values).catch((error) => ({
                    //   [FORM_ERROR]: error,
                    // }));
                  }}
                  validate={validate}
                  render={({
                    handleSubmit,
                    submitting,
                    submitError,
                    dirtySinceLastSubmit,
                  }) => (
                    <form onSubmit={handleSubmit} autoComplete="off">
                      <div className="row">
                        <div className="col-md-3">
                          <Field
                            name="name"
                            component={TextInput}
                            placeholder="Name"
                            defaultValue={category?.name}
                          />
                        </div>
                        <div className="col-md-3">
                          <Field
                            name="parentCategoryId"
                            component="select"
                            placeholder="Parent Category"
                            defaultValue={category?.parentCategoryId}
                          >
                            {({ input, meta }) => (
                              <div className="form-group">
                                <select
                                  className="form-control form-control-sm"
                                  {...input}
                                >
                                  <option value="null">
                                    --Select Category--
                                  </option>
                                  {categories.map((a) => (
                                    <option key={a.id} value={a.id}>
                                      {a.name}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            )}
                          </Field>
                        </div>
                        <div className="col-md-3">
                          <Field
                            name="priceRange"
                            component={TextInput}
                            placeholder="Price Range"
                            defaultValue={category?.priceRange}
                          />
                        </div>
                        <div className="col-md-3">
                          <Field
                            name="displayOrder"
                            component={TextInput}
                            placeholder="DisplayOrder"
                          />
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-md-3">
                          <Field
                            type="checkbox"
                            name="showOnHomeScreen"
                            component="input"
                          >
                            {({ input, meta }) => (
                              <div className="custom-control custom-checkbox">
                                <input
                                  {...input}
                                  className="custom-control-input"
                                  type="checkbox"
                                  id="showOnHomeScreen"
                                  checked={category?.showOnHomeScreen}
                                />
                                <label
                                  htmlFor="showOnHomeScreen"
                                  className="custom-control-label"
                                >
                                  Show on home page
                                </label>
                              </div>
                            )}
                          </Field>
                        </div>
                        <div className="col-md-3">
                          <Field type="checkbox" name="isPublished">
                            {({ input, meta }) => (
                              <div className="custom-control custom-checkbox">
                                <input
                                  {...input}
                                  className="custom-control-input"
                                  type="checkbox"
                                  id="isPublished"
                                  checked={category?.isPublished}
                                />
                                <label
                                  htmlFor="isPublished"
                                  className="custom-control-label"
                                >
                                  Published
                                </label>
                              </div>
                            )}
                          </Field>
                        </div>

                        <div className="col-md-6">
                          <Field
                            name="description"
                            component={TextAreaInput}
                            placeholder="Description"
                            defaultValue={category?.description}
                          />
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-md-12 text-right">
                          {submitError && !dirtySinceLastSubmit && (
                            <ErrorMessage
                              error={submitError}
                              text="Error during sumit your form."
                            />
                          )}
                          <button
                            type="submit"
                            className="btn btn-sm btn-primary"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header pt-2 pb-2">
                <h3 className="card-title">Category Image</h3>
                <div className="card-tools">
                  <button
                    className="btn btn-tool"
                    disabled={category ? false : true}
                    onClick={() => setImageUpload(true)}
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
              </div>
              <div className="card-body">
                <div className="text-center">
                  {category && category.picture && (
                    <img
                      src={`${process.env.REACT_APP_IMAGE_URL}/categories/large/${category.picture}`}
                      className="rounded"
                      width="200px"
                      height="200px"
                      alt="category image"
                    />
                  )}

                  {category && image && (
                    <img
                      src={URL.createObjectURL(image)}
                      className="rounded"
                      width="200px"
                      height="200px"
                      alt="category image"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {imageUpload && (
          <PhotoUploadWidget uploadPhoto={handleUploadImage} loading={false} />
        )}
      </section>
    </Fragment>
  );
};

export default observer(AddCategoryPage);
