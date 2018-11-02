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
    passwordOne !== passwordTwo ||
    passwordOne === "" ||
    email === "" ||
    firstName === "" ||
    lastName === "";

  return (
    <>
      {error && (
        <p className="has-text-danger has-text-weight-semibold error-message">
          {error.message}
        </p>
      )}
      <form onSubmit={onSubmit} className="sign-up-form">
        <div>
          <label className="label" htmlFor="firstName">
            First Name
          </label>
          <input
            id="firstName"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            placeholder="First Name"
            className="input"
          />
        </div>
        <div>
          <label className="label" htmlFor="lastName">
            Last Name
          </label>
          <input
            id="lastName"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            placeholder="Last Name"
            className="input"
          />
        </div>
        <div>
          <label className="label" htmlFor="email">
            Email Address
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
          <label className="label" htmlFor="password1">
            Password
          </label>
          <input
            id="password1"
            value={passwordOne}
            onChange={e => setPasswordOne(e.target.value)}
            placeholder="Password"
            type="password"
            className="input"
          />
        </div>
        <div>
          <label className="label" htmlFor="password2">
            Confirm Password
          </label>
          <input
            id="password2"
            value={passwordTwo}
            onChange={e => setPasswordTwo(e.target.value)}
            placeholder="Confirm Password"
            type="password"
            className="input"
          />
        </div>
        <div style={{ gridColumnStart: 1 }}>
          <button disabled={isInvalid} type="submit" className="button is-dark">
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
};
