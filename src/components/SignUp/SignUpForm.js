import React from "react";
import * as routes from "../../constants/routes";
import { auth } from "../../firebase";

const initialState = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

export class SignUpForm extends React.Component {
  state = initialState;

  handleChange = e => {
    const stateKey = e.target.getAttribute("name");
    this.setState({ [stateKey]: e.target.value });
  };

  onSubmit = async e => {
    e.preventDefault();
    const { username, email, passwordOne } = this.state;

    try {
      const authUser = await auth.signUp(username, passwordOne);
      this.setState({ ...initialState });
      this.props.history.push(routes.HOME);
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const isInvalid =
      this.state.passwordOne !== this.state.passwordTwo ||
      this.state.passwordOne === "" ||
      this.state.email === "" ||
      this.state.username === "";

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
          placeholder="Username"
        />
        <input
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          placeholder="Email Address"
        />
        <input
          name="passwordOne"
          value={this.state.passwordOne}
          onChange={this.handleChange}
          placeholder="Password"
          type="password"
        />
        <input
          name="passwordTwo"
          value={this.state.passwordTwo}
          onChange={this.handleChange}
          placeholder="Confirm Password"
          type="password"
        />
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>
        {this.state.error && <p>{this.state.error.message}</p>}
      </form>
    );
  }
}
