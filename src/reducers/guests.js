export default (state = [{ name: "1", phoneNumber: 2 }], action) => {
  switch (action.type) {
    case "ADD_GUEST":
      return [
        ...state,
        {
          name: action.name,
          phoneNumber: action.phoneNumber
        }
      ];
    case "EDIT_GUEST":
      return [
        ...state.slice(0, action.index),
        {
          name: action.name,
          phoneNumber: action.phoneNumber
        },
        ...state.slice(action.index + 1)
      ];
    case "REMOVE_GUEST":
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
};
