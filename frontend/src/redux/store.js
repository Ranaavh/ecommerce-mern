// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer, // Combine reducers here
  },
});

export default store;
