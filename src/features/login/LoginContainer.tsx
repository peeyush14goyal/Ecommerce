import React, { useState, useEffect, useContext, Fragment } from "react";
import { history } from "../..";
import {
  combineValidators,
  isRequired
} from "revalidate";
import { observer } from "mobx-react-lite";
import { RootStoreContext } from "../../app/stores/rootStore";
import { Form, Field } from "react-final-form";
import { IUserLogin } from "../../app/models/user";
import { FORM_ERROR } from "final-form";
import ErrorMessage from "../../app/common/form/ErrorMessage";

const validate = combineValidators({
  email: isRequired("Email"),
  password: isRequired("Password"),
});

const LoginContainer = () => {
  const rootStore = useContext(RootStoreContext);
  const { login } = rootStore.userStore;

  const [isPass, setPassType] = useState(true);

  const onPasswordVisibilityChange = () => {
    setPassType(!isPass);
  };

  const onForgotPasswordClick = () => {
    history.push(`/forgot-password`);
  };

  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="login-logo">
          <a>
            <b>Suri</b>Consumer
          </a>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <Form
              onSubmit={(values: IUserLogin) =>
                login(values).catch((error) => ({
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
                dirtySinceLastSubmit
            }) => (
                <form onSubmit={handleSubmit} autoComplete='off'>
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
                  {submitError && !dirtySinceLastSubmit && (
                    <ErrorMessage
                      error={submitError}
                      text='Invalid email or password'
                    />
                  )}
                  <button
                    disabled={(invalid && !dirtySinceLastSubmit) || pristine}
                     type="submit" 
                     className="btn btn-primary btn-block">
                    Sign In
                  </button>
                </form>
              )}
            />

            <p className="mb-1 mt-3">
              <a className="cursor-pointer" onClick={onForgotPasswordClick}>I forgot my password</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(LoginContainer);
