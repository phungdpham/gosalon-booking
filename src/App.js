import React from "react";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

// import AuthLayout from "layouts/Auth/Auth.jsx";
import AdminLayout from './layouts/Admin';

import "bootstrap/dist/css/bootstrap.css";
import "./assets/scss/paper-dashboard.scss";
// import './assets/demo/demo';

const hist = createBrowserHistory();


const App = () => (
  <Router history={hist}>
    <Switch>
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Redirect from="/" to="/admin/appointment" />
    </Switch>
  </Router>
);

export default App;
