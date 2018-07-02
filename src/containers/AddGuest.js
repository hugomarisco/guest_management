import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import { addGuest } from "../actions";
import "./AddGuest.css";

class AddGuest extends Component {
  constructor(props) {
    super(props);

    this.nameInput = createRef();
    this.phoneNumberInput = createRef();
  }

  onSubmit = e => {
    e.preventDefault();

    const name = this.nameInput.value && this.nameInput.value.trim();
    const phoneNumber =
      this.phoneNumberInput && parseInt(this.phoneNumberInput.value, 10);

    if (!name || !phoneNumber) return;

    this.props.dispatch(addGuest(name, phoneNumber));

    this.nameInput.value = "";
    this.phoneNumberInput.value = "";
  };

  render() {
    return (
      <div className="AddGuest">
        <form onSubmit={this.onSubmit}>
          <input
            ref={node => (this.nameInput = node)}
            placeholder="Name"
            type="text"
            className="Control"
          />

          <input
            ref={node => (this.phoneNumberInput = node)}
            placeholder="Phone Number"
            type="number"
            className="Control"
          />

          <button type="submit" className="SubmitButton">Add Guest</button>
        </form>
      </div>
    );
  }
}

AddGuest = connect()(AddGuest);

export default AddGuest;
