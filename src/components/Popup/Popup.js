import React, { Component } from "react";
import { Exit } from "../Exit/Exit";
import "./Popup.scss";
import uuid from "react-uuid";
import Zoom from "react-reveal/Zoom";

class Popup extends Component {
  state = {
    name: "",
    lastName: "",
    age: ""
  };

  componentDidMount() {
    if (this.props.formData) {
      this.setState({
        ...this.props.formData
      });
    }
  }

  handleChange = e => {
    console.log(e.target.id, e.target.value, this.state);
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    const { addUser, closePopup, onFormEdit } = this.props;
    const { popup } = this.state;
    const data = { ...this.state };

    e.preventDefault();

    if (this.state.id) {
      onFormEdit(data);
    } else {
      addUser(data);
    }
    closePopup();
  };

  render() {
    const { name, lastName, age, popup } = this.state;
    const { closePopup, formData } = this.props;
    return (
      <Zoom collapse when={popup}>
        <div className="popup">
          {formData && formData.name ? <h2>Edit User</h2> : <h2>Add User</h2>}
          <form onSubmit={this.handleSubmit}>
            <Exit closePopup={closePopup} />
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={(formData && formData.name) || name}
              onChange={this.handleChange}
            />

            <label htmlFor="name">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={(formData && formData.lastName) || lastName}
              onChange={this.handleChange}
            />

            <label htmlFor="name">Age:</label>
            <input
              type="number"
              id="age"
              value={(formData && formData.age) || age}
              onChange={this.handleChange}
            />

            <button>Submit</button>
          </form>
        </div>
      </Zoom>
    );
  }
}

export { Popup };