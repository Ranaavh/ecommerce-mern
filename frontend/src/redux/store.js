import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

// Initial state of the Redux store
const initialState = {};

// Middleware to handle asynchronous actions
const middleware = [thunk];

// Create the Redux store
const store = createStore(
  rootReducer, // Root reducer combining all individual reducers
  initialState, // Initial state for the store
  composeWithDevTools(applyMiddleware(...middleware)) // Enhancer for Redux DevTools and applying middleware
);

export default store;
