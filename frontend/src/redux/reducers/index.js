import { combineReducers } from "redux";
import authReducer from "./authReducer";

// Combine all reducers into a single root reducer
export default combineReducers({
  // Auth-related state is managed by authReducer
  auth: authReducer,
});
