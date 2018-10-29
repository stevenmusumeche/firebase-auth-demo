import React from "react";
import { withRouter } from "react-router-dom";
import { SignInForm } from "./SignInForm";
import { SignUpLink } from "../SignUp/SignUpLink";

export const SignInPage = withRouter(({ history }) => (
  <div>
    <h1>Sign In</h1>
    <SignInForm history={history} />
    <SignUpLink />
  </div>
));
