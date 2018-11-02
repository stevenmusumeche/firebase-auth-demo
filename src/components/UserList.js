import React from "react";

export const UserList = ({ users }) => (
  <>
    <h2>List of Users</h2>
    <p>(Saved on Sign Up in Firebase Database)</p>

    <ul>
      {Object.keys(users).map(key => (
        <li key={key}>
          {users[key].firstName} {users[key].lastName} {users[key].email}
        </li>
      ))}
    </ul>
  </>
);
