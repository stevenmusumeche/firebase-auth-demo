import React from "react";
import { AuthUserContext } from "./AuthUserContext";
import { firebase } from "../firebase";

export const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    state = { authUser: null };

    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null });
      });
    }

    render() {
      return (
        <AuthUserContext.Provider value={this.state.authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      );
    }
  }

  return WithAuthentication;
};
