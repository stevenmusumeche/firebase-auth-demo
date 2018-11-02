import React, { useState } from "react";
import { auth } from "../../firebase";

export const PasswordChangeForm = () => {
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState(null);

  const isInvalid = password1 === "" || password1 !== password2;

  const onSubmit = async e => {
    e.preventDefault();
    try {
      await auth.updatePassword(password1);
      setPassword1("");
      setPassword2("");
      setError(null);
    } catch (e) {
      setError(e);
    }
  };

  return (
    <>
      {error && (
        <p className="has-text-danger has-text-weight-semibold error-message">
          {error.message}
        </p>
      )}
      <form onSubmit={onSubmit} className="password-change-form">
        <div>
          <label className="label" htmlFor="password1">
            New Password
          </label>
          <input
            id="password1"
            value={password1}
            onChange={e => setPassword1(e.target.value)}
            placeholder="New Password"
            type="password"
            className="input"
          />
        </div>
        <div>
          <label className="label" htmlFor="password2">
            Confirm New Password
          </label>
          <input
            id="password2"
            value={password2}
            onChange={e => setPassword2(e.target.value)}
            placeholder="Confirm New Password"
            type="password"
            className="input"
          />
        </div>
        <div>
          <button disabled={isInvalid} className="button is-dark">
            Change My Password
          </button>
        </div>
      </form>
    </>
  );
};
