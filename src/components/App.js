import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as routes from "../constants/routes";
import { Navigation } from "./Navigation";
import { Landing } from "./Landing";
import { SignUp } from "./SignUp";
import { SignIn } from "./SignIn";
import { PasswordForget } from "./PasswordForget";
import { Home } from "./Home";
import { Account } from "./Account";

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Route exact path={routes.LANDING} component={Landing} />
      <Route exact path={routes.SIGN_UP} component={SignUp} />
      <Route exact path={routes.SIGN_IN} component={SignIn} />
      <Route exact path={routes.PASSWORD_FORGET} component={PasswordForget} />
      <Route exact path={routes.HOME} component={Home} />
      <Route exact path={routes.ACCOUNT} component={Account} />
    </div>
  </Router>
);

export default App;
