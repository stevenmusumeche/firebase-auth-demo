import React, { useState } from "react";
import { auth } from "../../firebase";
import * as routes from "../../constants/routes";

export const SignInForm = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const isInvalid = password === "" || email === "";

  const onSubmit = async e => {
    e.preventDefault();

    try {
      await auth.signIn(email, password);

      setEmail("");
      setPassword("");
      setError(null);

      history.push(routes.HOME);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      {error && (
        <p className="has-text-danger has-text-weight-semibold error-message">
          {error.message}
        </p>
      )}
      <form onSubmit={onSubmit} className="sign-in-form">
        <div>
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email Address"
            className="input"
          />
        </div>
        <div>
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            className="input"
          />
        </div>
        <div>
          <button disabled={isInvalid} type="submit" className="button is-dark">
            Sign In
          </button>
        </div>
      </form>
    </>
  );
};
