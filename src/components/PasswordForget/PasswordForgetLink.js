import React from "react";
import * as routes from "../../constants/routes";
import { Link } from "react-router-dom";

export const PasswordForgetLink = () => (
  <p>
    <Link to={routes.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);
