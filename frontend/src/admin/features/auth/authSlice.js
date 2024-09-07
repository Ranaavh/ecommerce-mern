import { createSlice } from "@reduxjs/toolkit";

// Get token from localStorage if it exists
const token = localStorage.getItem("token");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: token ? { token } : null, // If token exists, set user
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
