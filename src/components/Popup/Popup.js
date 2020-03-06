import React, { Component } from "react";
import { Exit } from "../Exit/Exit";
import "./Popup.scss";
import uuid from "react-uuid";

class Popup extends Component {
  state = {
    name: null,
    lastName: null,
    age: null,
    id: uuid()
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    const { addUser, closePopup } = this.props;
    const { popup } = this.state;

    e.preventDefault();
    addUser(this.state);
    closePopup();
  };

  render() {
    return (
      <div className="popup">
        <h2>Add User</h2>
        <form onSubmit={this.handleSubmit}>
          <Exit closePopup={this.props.closePopup} />
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={this.handleChange} />

          <label htmlFor="name">Last Name:</label>
          <input type="text" id="lastName" onChange={this.handleChange} />

          <label htmlFor="name">Age:</label>
          <input type="number" id="age" onChange={this.handleChange} />

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export { Popup };
