import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as routes from "../constants/routes";
import { Navigation } from "./Navigation/Navigation";
import { Landing } from "./Landing";
import { SignUpPage } from "./SignUp/SignUpPage";
import { SignInPage } from "./SignIn/SignInPage";
import { PasswordForgetPage } from "./PasswordForget/PasswordForgetPage";
import { Home } from "./Home";
import { Account } from "./Account";
import { withAuthentication } from "./withAuthentication";

const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr />
      <Route exact path={routes.LANDING} component={Landing} />
      <Route exact path={routes.SIGN_UP} component={SignUpPage} />
      <Route exact path={routes.SIGN_IN} component={SignInPage} />
      <Route
        exact
        path={routes.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route exact path={routes.HOME} component={Home} />
      <Route exact path={routes.ACCOUNT} component={Account} />
    </div>
  </Router>
);

export default withAuthentication(App);
