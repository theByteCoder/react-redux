import { combineReducers } from "redux";
import { accountReducer, amountReducer } from "./reducer";

const reducers = combineReducers({
  account: accountReducer,
  amount: amountReducer,
});

export default reducers;
