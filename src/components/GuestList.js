import React from "react";
import PropTypes from "prop-types";
import Guest from "./Guest";
import "./GuestList.css";

const GuestList = ({ guests, removeGuest, editGuest }) => (
  <ul className="GuestList">
    {guests.map((guest, index) => (
      <Guest
        key={index}
        {...guest}
        removeGuest={removeGuest.bind(null, index)}
        editGuest={editGuest.bind(null, index)}
      />
    ))}
  </ul>
);

GuestList.propTypes = {
  guests: PropTypes.arrayOf(
    PropTypes.shape({
      phoneNumber: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  removeGuest: PropTypes.func.isRequired,
  editGuest: PropTypes.func.isRequired
};

export default GuestList;
