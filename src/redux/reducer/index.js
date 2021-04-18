import { combineReducers } from "redux";
import toggleModeReducer from "./toggleMode";

const reducers = combineReducers({
  Mode: toggleModeReducer
});

export default reducers;
