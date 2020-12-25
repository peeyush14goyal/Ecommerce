import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Switch } from "react-router-dom";
import { SnackbarProvider, withSnackbar } from 'notistack';
import dateFnsLocalizer from 'react-widgets-date-fns';
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-widgets/dist/css/react-widgets.css';
import './index.css';
import App from './app/layout/App';
import * as serviceWorker from './serviceWorker';

dateFnsLocalizer();

export const history = createBrowserHistory();

class EComApp extends React.Component {

  render() {
    return (
      <SnackbarProvider maxSnack={3} anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}>
        <div>
          <Router history={history}>
            <Switch>
              <App />
            </Switch>
          </Router>
        </div>
      </SnackbarProvider>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <EComApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
