import { combineReducers } from "redux";
import { authentification } from "./authentificationReducer";

const rootReducer = combineReducers({
  authentification,
});

export default rootReducer;
