import React, { useState } from "react";
import * as routes from "../../constants/routes";
import { auth } from "../../firebase";

export const SignUpForm = ({ history }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [error, setError] = useState(null);

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const authUser = await auth.signUp(username, passwordOne);
      resetState();
      history.push(routes.HOME);
    } catch (error) {
      setError(error);
    }
  };

  const resetState = () => {
    setUsername("");
    setEmail("");
    setPasswordOne("");
    setPasswordTwo("");
    setError(null);
  };

  const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === "" ||
    email === "" ||
    username === "";

  return (
    <form onSubmit={onSubmit}>
      <input
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email Address"
      />
      <input
        value={passwordOne}
        onChange={e => setPasswordOne(e.target.value)}
        placeholder="Password"
        type="password"
      />
      <input
        value={passwordTwo}
        onChange={e => setPasswordTwo(e.target.value)}
        placeholder="Confirm Password"
        type="password"
      />
      <button disabled={isInvalid} type="submit">
        Sign Up
      </button>
      {error && <p>{error.message}</p>}
    </form>
  );
};
