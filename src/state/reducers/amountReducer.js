const reducer = (state = 0, action) => {
  switch (action.type.toLowerCase()) {
    case "update-balance":
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
