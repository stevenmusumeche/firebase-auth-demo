import React from "react";
import { signOut } from "../firebase/auth";

export const SignOutButton = () => (
  <button
    type="button"
    className="button is-fullwidth is-light"
    onClick={signOut}
  >
    Sign Out
  </button>
);
