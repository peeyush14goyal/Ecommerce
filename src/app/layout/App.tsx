import React, { Suspense, lazy } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Main from './Main';
import './App.css';
import { observer } from "mobx-react-lite";

const LoginContainer = lazy(() => import('../../features/login/LoginContainer'));
const RegisterContainer = lazy(() => import('../../features/register/RegisterContainer'));
const ForgotPasswordContainer = lazy(() => import('../../features/forgot-password/ForgotPasswordContainer'));

const ProtectedRoute = ({ component: Component, ...rest }: any) => (
  <Route {...rest} render={(props) => (localStorage.getItem('jwt') ? (
    <Component {...props} {...rest} />
  ) : (
      <Redirect to={{
        pathname: `/login`,
        state: { referrer: props.location }
      }} />
    )
  )}
  />
);

function App() {
  return (
    <Suspense fallback={`...loading`}>
      <Switch>
        <Route path={`/login`} component={LoginContainer} />
        <Route path={`/register`} component={RegisterContainer} />
        <Route path={`/forgot-password`} component={ForgotPasswordContainer} />
        <ProtectedRoute path="/" component={Main} />
      </Switch>
    </Suspense>
  );
}

export default observer(App);
