import React from "react";

export const UserList = ({ users }) => (
  <>
    <h2 className="subtitle">List of Users</h2>
    <p className="is-italic">Saved on Sign Up in Firebase Database</p>

    <ul className="user-list">
      {Object.keys(users).map(key => (
        <li key={key}>
          {users[key].firstName} {users[key].lastName}, {users[key].email}
        </li>
      ))}
    </ul>
  </>
);
