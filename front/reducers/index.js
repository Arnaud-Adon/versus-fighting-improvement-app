import { combineReducers } from "redux";
import { authentification } from "./authentificationReducer";
import { characters } from "./characterReducer";

const rootReducer = combineReducers({
  authentification,
  characters,
});

export default rootReducer;
