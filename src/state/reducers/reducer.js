import { combineReducers } from "redux";

const accountReducer = (state = 0, action) => {
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

const amountReducer = (state = 0, action) => {
  switch (action.type.toLowerCase()) {
    case "update-balance":
      return action.payload;
    default:
      return state;
  }
};

const reducers = combineReducers({
  account: accountReducer,
  amount: amountReducer,
});

export default reducers;
