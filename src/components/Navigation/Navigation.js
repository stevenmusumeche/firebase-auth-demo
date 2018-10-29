import React from "react";
import { AuthUserContext } from "../AuthUserContext";
import { NavigationAuth } from "./NavigationAuth";
import { NavigationNonAuth } from "./NavigationNonAuth";

export const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
  </AuthUserContext.Consumer>
);
