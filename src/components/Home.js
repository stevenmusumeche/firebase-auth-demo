import React, { useState, useEffect } from "react";
import { withAuthorization } from "./withAuthorization";
import { db } from "../firebase";
import { UserList } from "./UserList";

const authCondition = authUser => !!authUser;

export const Home = withAuthorization(authCondition)(() => {
  const [users, setUsers] = useState({});
  useEffect(async () => {
    setUsers(await db.getUsers());
  }, []);

  return (
    <div>
      <h1 className="title">Home</h1>
      <p>The home page is accessible by every signed-in user.</p>
      <hr />
      <UserList users={users} />
    </div>
  );
});
