import { db } from "./firebase";

export const createUser = (id, props) => db.ref(`users/${id}`).set(props);

export const getUsers = async () => {
  const snapshot = await db.ref("users").once("value");
  return snapshot.val();
};
