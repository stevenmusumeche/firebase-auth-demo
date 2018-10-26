import React from "react";
import * as routes from "../../constants/routes";
import { Link } from "react-router-dom";

export const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>
);
