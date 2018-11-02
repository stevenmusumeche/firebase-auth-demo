import React from "react";
import { withAuthorization } from "./withAuthorization";

const authCondition = authUser => !!authUser;

export const Home = withAuthorization(authCondition)(() => (
  <div>
    <h1>Home</h1>
    <p>The home page is accessible by every signed-in user.</p>
  </div>
));
