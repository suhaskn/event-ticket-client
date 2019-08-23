import React from "react";
import * as request from "superagent";
import { url } from "../constants";

export default class DisplaySignUp extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };

  onSubmit = event => {
    event.preventDefault();
    const { firstName, lastName, email, password } = this.state;

    request
      .post(`${url}/signup`)
      .send({ firstName, lastName, email, password })
      .then(response => {
        this.setState({ firstName: "", lastName: "", email: "", password: "" });
        console.log("User added to database");
      });
  };

  onChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const formStyle = {
      border: '3px solid #f1f1f1',
      width: '40%',
      height: '330px',
      margin: '0 auto'
    }
    return (
      <div>
        <h2>Please register your details</h2>
        <div>
          <form onSubmit={this.onSubmit} style={formStyle}>
            <p>First Name:</p>
            <input
              type="text"
              value={this.state.firstName}
              placeholder="first name"
              name="firstName"
              onChange={this.onChange}
            />
            <p>Last Name:</p>
            <input
              type="text"
              value={this.state.lastName}
              placeholder="last name"
              name="lastName"
              onChange={this.onChange}
            />
            <p>Email:</p>
            <input
              type="text"
              value={this.state.email}
              placeholder="email"
              name="email"
              onChange={this.onChange}
            />
            <p>Password:</p>
            <input
              type="text"
              value={this.state.password}
              placeholder="password"
              name="password"
              onChange={this.onChange}
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}