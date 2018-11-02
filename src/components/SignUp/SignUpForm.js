import React, { useState } from "react";
import * as routes from "../../constants/routes";
import { auth, db } from "../../firebase";

// todo refactor to combined state
export const SignUpForm = ({ history }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [error, setError] = useState(null);

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const authUser = await auth.signUp(email, passwordOne);
      await db.createUser(authUser.user.uid, { email, firstName, lastName });
      resetState();
      history.push(routes.HOME);
    } catch (error) {
      setError(error);
    }
  };

  const resetState = () => {
    setEmail("");
    setFirstName("");
    setLastName("");
    setPasswordOne("");
    setPasswordTwo("");
    setError(null);
  };

  const isInvalid =
    passwordOne !== passwordTwo || passwordOne === "" || email === "";

  return (
    <form onSubmit={onSubmit}>
      <input
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        placeholder="First Name"
      />
      <input
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        placeholder="Last Name"
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
