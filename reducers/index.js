import { combineReducers } from "redux";
import { authentification } from "./authentificationReducer";
import { reducer as form } from "redux-form";

const rootReducer = combineReducers({
  form,
  authentification,
});

export default rootReducer;
