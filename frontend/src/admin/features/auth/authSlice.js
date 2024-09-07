// src/admin/features/auth/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null, // Update this to reflect admin user
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload; // Store admin user details
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
