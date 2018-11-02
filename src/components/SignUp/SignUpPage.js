import React from "react";
import { withRouter } from "react-router-dom";
import { SignUpForm } from "./SignUpForm";

export const SignUpPage = withRouter(({ history }) => (
  <div>
    <h1 className="title">Sign Up</h1>
    <SignUpForm history={history} />
  </div>
));
