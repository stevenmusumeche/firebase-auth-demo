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
      setError(e);
    }
  };

  const isInvalid = email === "";

  return (
    <>
      {error && (
        <p className="has-text-danger has-text-weight-semibold error-message">
          {error.message}
        </p>
      )}
      <form onSubmit={onSubmit}>
        <div>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            className="input"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email Address"
          />
        </div>
        <button disabled={isInvalid} className="button is-dark" type="submit">
          Reset My Password
        </button>
      </form>
    </>
  );
});
