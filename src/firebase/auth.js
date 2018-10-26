import { auth } from "./firebase";

export const signUp = (username, password) =>
  auth.createUserWithEmailAndPassword(username, password);

export const signIn = (username, password) =>
  auth.signInWithEmailAndPassword(username, password);

export const signOut = () => auth.signOut();

export const resetPassword = email => auth.sendPasswordResetEmail(email);

export const updatePassword = password =>
  auth.currentUser.updatePassword(password);
