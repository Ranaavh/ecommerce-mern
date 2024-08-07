import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../actions/types";

// Initial state of the authentication reducer
const initialState = {
  token: localStorage.getItem("token"), // Retrieve token from localStorage if available
  isAuthenticated: null, // User authentication status
  loading: true, // Loading state while checking authentication
  user: null, // User data
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    // Handle successful registration or login
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token); // Store token in localStorage
      return {
        ...state,
        token: payload.token,
        isAuthenticated: true,
        loading: false, // Set loading to false after successful login/registration
        user: payload.user, // Set user data from payload
      };

    // Handle failed registration, login, or logout
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem("token"); // Remove token from localStorage
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false, // Set loading to false after failure or logout
        user: null, // Clear user data
      };

    default:
      return state; // Return current state for unrecognized actions
  }
}
