import { combineReducers } from "redux";
import PhoneBookReducer from "./PhoneBookReducer";
import FilterReducer from "./FilterReducer";
import loader from "./loader";
import error from "./error";

const rootReducer = combineReducers({
  contacts: PhoneBookReducer,
  filter: FilterReducer,
  loader: loader,
  error: error,
});

export default rootReducer;
