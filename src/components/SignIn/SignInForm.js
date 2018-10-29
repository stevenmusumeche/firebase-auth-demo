import React, { useState } from "react";
import { auth } from "../../firebase";
import * as routes from "../../constants/routes";

const initialState = {
  email: "",
  password: "",
  error: null
};

export class SignInForm extends React.Component {
  state = initialState;

  handleChange = e => {
    const stateKey = e.target.getAttribute("name");
    this.setState({ [stateKey]: e.target.value });
  };

  onSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      const result = await auth.signIn(email, password);

      this.setState({ ...initialState });
      this.props.history.push(routes.HOME);
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const isInvalid = this.state.password === "" || this.state.email === "";

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          placeholder="Email Address"
        />
        <input
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          placeholder="Password"
          type="password"
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>

        {this.state.error && <p>{this.state.error.message}</p>}
      </form>
    );
  }
}
