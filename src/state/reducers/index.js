import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import amountReducer from "./amountReducer";

const reducers = combineReducers({
  account: accountReducer,
  amount: amountReducer,
});

export default reducers;
