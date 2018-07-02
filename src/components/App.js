import React from "react";
import AddGuest from "../containers/AddGuest";
import EditableGuestList from "../containers/EditableGuestList";
import "./App.css";

const App = () => (
  <div className="App">
    <AddGuest />
    <EditableGuestList />
  </div>
);

export default App;
