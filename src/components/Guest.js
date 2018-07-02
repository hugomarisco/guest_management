import React, { PureComponent, createRef } from "react";
import PropTypes from "prop-types";
import "./Guest.css";

class Guest extends PureComponent {
  constructor(props) {
    super(props);

    this.nameInput = createRef();
    this.phoneNumberInput = createRef();
  }

  onEdit = () => {
    const name = this.nameInput.value && this.nameInput.value.trim();
    const phoneNumber =
      this.phoneNumberInput.value && parseInt(this.phoneNumberInput.value, 10);

    if (!name || !phoneNumber) return;

    this.props.editGuest(name, phoneNumber);
  };

  componentWillReceiveProps(props) {
    this.nameInput.value = props.name;
    this.phoneNumberInput.value = props.phoneNumber;
  }

  render() {
    return (
      <li className="Guest">
        <input
          ref={node => (this.nameInput = node)}
          placeholder="Name"
          defaultValue={this.props.name}
          className="Control"
        />

        <input
          ref={node => (this.phoneNumberInput = node)}
          defaultValue={this.props.phoneNumber}
          placeholder="Phone Number"
          type="number"
          className="Control"
        />

        <div className="Controls">
          <button type="button" onClick={this.onEdit} className="Button">
            Edit
          </button>

          <button
            type="button"
            onClick={this.props.removeGuest}
            className="Button"
          >
            Remove
          </button>
        </div>
      </li>
    );
  }
}

Guest.propTypes = {
  name: PropTypes.string.isRequired,
  phoneNumber: PropTypes.number.isRequired,
  removeGuest: PropTypes.func.isRequired,
  editGuest: PropTypes.func.isRequired
};

export default Guest;
