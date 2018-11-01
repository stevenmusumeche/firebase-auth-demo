import React, { useState } from "react";
import * as routes from "../../constants/routes";
import { withRouter } from "react-router-dom";
import { auth } from "../../firebase";

export const PasswordForgetForm = withRouter(({ history }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const onSubmit = async e => {
    e.preventDefault();
    try {
      await auth.resetPassword(email);
      setEmail("");
      setError(null);
      history.push(routes.HOME);
    } catch (e) {
      setError(error);
    }
  };

  const isInvalid = email === "";

  return (
    <form onSubmit={onSubmit}>
      <input
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email Address"
      />
      <button disabled={isInvalid} type="submit">
        Reset My Password
      </button>

      {error && <p>{error.message}</p>}
    </form>
  );
});
