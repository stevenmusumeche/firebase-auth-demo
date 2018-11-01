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
      const result = await auth.signIn(email, password);

      setEmail("");
      setPassword("");
      setError(null);

      history.push(routes.HOME);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email Address"
      />
      <input
        name="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
      />
      <button disabled={isInvalid} type="submit">
        Sign In
      </button>

      {error && <p>{error.message}</p>}
    </form>
  );
};
