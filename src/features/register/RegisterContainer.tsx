import React, { useState, useEffect, useContext } from "react";
import { observer } from "mobx-react-lite";
import { RootStoreContext } from "../../app/stores/rootStore";
import { combineValidators, composeValidators, matchesField, isRequired } from "revalidate";
import { FORM_ERROR } from "final-form";
import ErrorMessage from "../../app/common/form/ErrorMessage";
import { Field, Form } from "react-final-form";
import { IUserRegister } from "../../app/models/user";

const validate = combineValidators({
    name: isRequired("Name"),
    mobile: isRequired("Mobile"),
    email: isRequired("Email"),
    password: isRequired("Password"),
    
      confirmPassword: composeValidators(
        isRequired({message:"Confirm Password is required"}),
        matchesField('password','password')({
            message: 'Passwords do not match',
          }),
      )(),
});

function RegisterContainer(props: any) {
  const rootStore = useContext(RootStoreContext);
  const { register } = rootStore.userStore;

//   const [state, setState] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
  const [isPass, setPassType] = useState(true);
//   const handleChange = (e: any) => {
//     const { id, value } = e.target;
//     setState((prevState) => ({
//       ...prevState,
//       [id]: value,
//     }));
//   };

//   const handleSubmitClick = (e: any) => {
//     e.preventDefault();
//     if (state.password === state.confirmPassword) {
//       // API call to register
//     } else {
//       console.log("Passwords do not match");
//     }
//   };

  const registerUser = async (user: IUserRegister) => {
    
  };

  const onPasswordVisibilityChange = () => {
    setPassType(!isPass);
  };

  return (
    <div className="hold-transition login-page">
      <div className="register-box">
        <div className="register-logo">
          <a>
            <b>Suri</b>Consumer
          </a>
        </div>

        <div className="card">
          <div className="card-body register-card-body">
            <p className="login-box-msg">Register</p>

            <Form
              onSubmit={(values: IUserRegister) =>
                registerUser(values).catch((error) => ({
                  [FORM_ERROR]: error,
                }))
              }
              validate={validate}
              render={({
                handleSubmit,
                submitting,
                submitError,
                invalid,
                pristine,
                dirtySinceLastSubmit,
              }) => (
                <form onSubmit={handleSubmit} autoComplete="off">
                  <Field
                    name="name"
                    component="input"
                  >
                    {( {input, meta} ) => (
                      <div className="input-group mb-3">
                        <input
                            {...input}
                          name="name"
                          type="text"
                          className={(meta.touched && meta.error?"form-control is-invalid focus-visible":"form-control")}
                          placeholder="Name"
                        />
                        <div className="input-group-append">
                          <div className="input-group-text">
                            <span className="fas fa-user"></span>
                          </div>
                        </div>
                        {meta.touched && meta.error && <span className="error invalid-feedback">{meta.error}</span>}
                      </div>
                    )}
                  </Field>
                  <Field
                    name="mobile"
                    component="input"
                  >
                    {( {input, meta} ) => (
                      <div className="input-group mb-3">
                        <input
                            {...input}
                          name="mobile"
                          type="text"
                          className={(meta.touched && meta.error?"form-control is-invalid focus-visible":"form-control")}
                          placeholder="Mobile"
                        />
                        <div className="input-group-append">
                          <div className="input-group-text">
                            <span className="fas fa-phone-alt"></span>
                          </div>
                        </div>
                        {meta.touched && meta.error && <span className="error invalid-feedback">{meta.error}</span>}
                      </div>
                    )}
                  </Field>
                  <Field
                    name="email"
                    component="input"
                    placeholder="Email"
                    className="form-control"
                  >
                    {( {input, meta} ) => (
                      <div className="input-group mb-3">
                        <input
                            {...input}
                          name="email"
                          type="email"
                          className={(meta.touched && meta.error?"form-control is-invalid focus-visible":"form-control")}
                          placeholder="Email"
                        />
                        <div className="input-group-append">
                          <div className="input-group-text">
                            <span className="fas fa-envelope"></span>
                          </div>
                        </div>
                        {meta.touched && meta.error && <span className="error invalid-feedback">{meta.error}</span>}
                      </div>
                    )}
                  </Field>
                  <Field
                    name="password"
                    component="input"
                    placeholder="Password"
                    type="password"
                  >
                      {({input, meta})=>
                         <div className="input-group mb-3">
                         <input
                            {...input}
                           name="password"
                           type={isPass ? "password" : "text"}
                           className={(meta.touched && meta.error?"form-control is-invalid focus-visible":"form-control")}
                           placeholder="Password"
                         />
                         <div className="input-group-append">
                           <div
                             className="input-group-text"
                             onClick={onPasswordVisibilityChange}
                           >
                             {isPass ? (
                               <span className="fas fa-eye"></span>
                             ) : (
                               <span className="fas fa-eye-slash"></span>
                             )}
                           </div>
                         </div>
                         {meta.touched && meta.error && <span className="error invalid-feedback">{meta.error}</span>}
                       </div>
                      }
                  </Field>
                  <Field
                    name="confirmPassword"
                    component="input"
                    placeholder="Password"
                    type="password"
                  >
                      {({input, meta})=>
                         <div className="input-group mb-3">
                         <input
                            {...input}
                           name="confirmPassword"
                           type={isPass ? "password" : "text"}
                           className={(meta.touched && meta.error?"form-control is-invalid focus-visible":"form-control")}
                           placeholder="Confirm Password"
                         />
                         <div className="input-group-append">
                           <div
                             className="input-group-text"
                             onClick={onPasswordVisibilityChange}
                           >
                             {isPass ? (
                               <span className="fas fa-eye"></span>
                             ) : (
                               <span className="fas fa-eye-slash"></span>
                             )}
                           </div>
                         </div>
                         {meta.touched && meta.error && <span className="error invalid-feedback">{meta.error}</span>}
                       </div>
                      }
                  </Field>
                  <div className="row">
                    <div className="col-12">
                      <button
                        disabled={(invalid && !dirtySinceLastSubmit) || pristine}
                        type="submit"
                        className="btn btn-primary btn-block"
                      >
                        Register
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
  );
}

export default RegisterContainer;
