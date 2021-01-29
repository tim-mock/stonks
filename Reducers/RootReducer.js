import AccountReducer from "./AccountReducer";
import ListReducer from "./ListReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  account: AccountReducer,
  lists: ListReducer,
});

export default rootReducer;
