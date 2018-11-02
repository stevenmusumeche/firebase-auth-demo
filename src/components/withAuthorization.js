import React, { useContext, useEffect } from "react";
import { firebase } from "../firebase";
import { withRouter } from "react-router-dom";
import * as routes from "../constants/routes";
import { AuthUserContext } from "./AuthUserContext";

export const withAuthorization = authCondition => Component => {
  const WithAuthorization = ({ history, ...props }) => {
    useEffect(() => {
      firebase.auth.onAuthStateChanged(authUser => {
        if (!authCondition(authUser)) {
          history.push(routes.SIGN_IN);
        }
      });
    }, []);

    const authUser = useContext(AuthUserContext);
    return authUser ? <Component {...props} /> : null;
  };

  return withRouter(WithAuthorization);
};
