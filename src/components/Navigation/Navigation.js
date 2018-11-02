import React, { useContext } from "react";
import { AuthUserContext } from "../AuthUserContext";
import { NavigationAuth } from "./NavigationAuth";
import { NavigationNonAuth } from "./NavigationNonAuth";

export const Navigation = () => {
  const authUser = useContext(AuthUserContext);
  return <nav>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</nav>;
};
