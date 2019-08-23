import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class ButtonListContainer extends Component {
  render() {
    const style = {
      padding: "10px",
      fontWeight: "bold"
    };
    return (
      <div style={{ flexDirection: "row" }}>
        <h2>
          <NavLink to="/signup">
            <label style={style}>Sign Up</label>
          </NavLink>
          <NavLink to="/login">
            <label style={style}>Log In</label>
          </NavLink>
          <NavLink to="/events">
            <label style={style}>Events</label>
          </NavLink>
        </h2>
      </div>
    );
  }
}