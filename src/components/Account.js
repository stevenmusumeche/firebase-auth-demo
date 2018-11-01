import React, { useContext } from "react";
import { AuthUserContext } from "./AuthUserContext";
import { PasswordForgetForm } from "./PasswordForget/PasswordForgetForm";
import { PasswordChangeForm } from "./PasswordChange/PasswordChangeForm";

export const Account = () => {
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
};
