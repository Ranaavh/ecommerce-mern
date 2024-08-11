import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for login
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      // Send login request to the server
      const response = await axios.post("/api/auth/login", credentials);
      return response.data; // Return user data on successful login
    } catch (error) {
      // Return error response data if login fails
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for register
export const register = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      // Send registration request to the server
      const response = await axios.post("/api/auth/register", userData);
      return response.data; // Return user data on successful registration
    } catch (error) {
      // Return error response data if registration fails
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, loading: false, error: null },
  reducers: {
    // Reducer for logging out
    logout: (state) => {
      state.user = null; // Clear user data on logout
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle login request states
      .addCase(login.pending, (state) => {
        state.loading = true; // Set loading to true while request is pending
        state.error = null; // Clear previous errors
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false; // Set loading to false on successful login
        state.user = action.payload; // Set user data
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false; // Set loading to false on failed login
        state.error = action.payload; // Set error message
      })
      // Handle register request states
      .addCase(register.pending, (state) => {
        state.loading = true; // Set loading to true while request is pending
        state.error = null; // Clear previous errors
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false; // Set loading to false on successful registration
        state.user = action.payload; // Set user data
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false; // Set loading to false on failed registration
        state.error = action.payload; // Set error message
      });
  },
});

export const { logout } = authSlice.actions; // Export logout action
export default authSlice.reducer; // Export the reducer for the slice
