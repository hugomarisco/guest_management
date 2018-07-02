import { connect } from "react-redux";
import { removeGuest, editGuest } from "../actions";
import GuestList from "../components/GuestList";

const mapStateToProps = state => ({
  guests: state.guests
});

const mapDispatchToProps = dispatch => ({
  removeGuest: index => dispatch(removeGuest(index)),
  editGuest: (index, name, phoneNumber) =>
    dispatch(editGuest(index, name, phoneNumber))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GuestList);
