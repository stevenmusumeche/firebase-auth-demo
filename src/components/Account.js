import React, { useContext } from "react";
import { withAuthorization } from "./withAuthorization";
import { AuthUserContext } from "./AuthUserContext";
import { PasswordForgetForm } from "./PasswordForget/PasswordForgetForm";
import { PasswordChangeForm } from "./PasswordChange/PasswordChangeForm";

const authCondition = authUser => !!authUser;

export const Account = withAuthorization(authCondition)(() => {
  const authUser = useContext(AuthUserContext);
  return (
    <div>
      <h1>Account: {authUser && authUser.email}</h1>
      <hr />
      <PasswordForgetForm />
      <hr />
      <PasswordChangeForm />
    </div>
  );
});
