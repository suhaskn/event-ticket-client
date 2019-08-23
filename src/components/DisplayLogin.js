import React from "react";
import { login, newName } from "../actions";
import { connect } from "react-redux";

class DisplayLogin extends React.Component {
  state = {
    email: "",
    password: ""
  };

  onSubmit = event => {
    event.preventDefault();

    const { email, password } = this.state;
    this.props.newName(email);
    this.props.login(email, password);
    this.setState({ email: "", password: "" });
  };

  onChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {

    const formStyle = {
      border: '3px solid #f1f1f1',
      width: '30%',
      height: '230px',
      margin: '0 auto'
    }

    return (
      <div>
        <h2>Log In with email and password</h2>

        <div>
          <form onSubmit={this.onSubmit} style={formStyle}>
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
              type="password"
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

const mapDispatchToProps = {
  login,
  newName
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayLogin);