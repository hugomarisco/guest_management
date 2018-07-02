export const addGuest = (name, phoneNumber) => ({
  type: "ADD_GUEST",
  name,
  phoneNumber
});

export const editGuest = (index, name, phoneNumber) => ({
  type: "EDIT_GUEST",
  index,
  name,
  phoneNumber
});

export const removeGuest = index => ({
  type: "REMOVE_GUEST",
  index
});
