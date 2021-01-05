import { combineReducers } from "redux";
import { authentification } from "./authentificationReducer";
import { characters } from "./characterReducer";
import { error } from "./errorReducer";
import { user } from "./userReducer";

const rootReducer = combineReducers({
  authentification,
  characters,
  error,
  user,
});

export default rootReducer;
