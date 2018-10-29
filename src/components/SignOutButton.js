import React from "react";
import { signOut } from "../firebase/auth";

export const SignOutButton = () => (
  <button type="button" onClick={signOut}>
    Sign Out
  </button>
);
