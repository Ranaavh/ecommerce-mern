import axios from "axios";
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "./types";

// Login Action
export const login = (userData) => async (dispatch) => {
  try {
    // Make a POST request to the login endpoint with user data
    const res = await axios.post(
      "http://localhost:5173/api/auth/login",
      userData
    );

    // Dispatch LOGIN_SUCCESS action with response data on success
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    return res.data; // Return the response data for further use
  } catch (err) {
    // Log the error to the console
    console.error("API Error:", err.response || err.message);

    // Dispatch LOGIN_FAIL action with error information on failure
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response ? err.response.data : { message: err.message },
    });

    throw err.response ? err.response.data : { message: err.message }; // Throw the error for further handling
  }
};

// Register Action
export const register = (userData) => async (dispatch) => {
  try {
    // Make a POST request to the register endpoint with user data
    const res = await axios.post(
      "http://localhost:5173/api/auth/register",
      userData
    );

    // Dispatch REGISTER_SUCCESS action with response data on success
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    return res.data; // Return the response data for further use
  } catch (err) {
    // Log the error to the console
    console.error("API Error:", err.response || err.message);

    // Dispatch REGISTER_FAIL action with error information on failure
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response ? err.response.data : { message: err.message },
    });

    throw err.response ? err.response.data : { message: err.message }; // Throw the error for further handling
  }
};
