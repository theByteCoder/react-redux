const reducer = (state = 0, action) => {
  switch (action.type.toLowerCase()) {
    case "deposit":
      return state + action.payload;
    case "withdraw":
      if (state === 0) {
        return state;
      }
      return state - action.payload;
    default:
      return state;
  }
};

export default reducer;
