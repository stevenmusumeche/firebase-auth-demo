import React from "react";
import { Link } from "react-router-dom";
import * as routes from "../../constants/routes";

export const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={routes.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={routes.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
);
