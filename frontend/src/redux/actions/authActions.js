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
    const res = await axios.post(
      "http://localhost:5173/api/auth/login",
      userData
    );
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    return res.data;
  } catch (err) {
    console.error("API Error:", err.response || err.message);
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response ? err.response.data : { message: err.message },
    });
    throw err.response ? err.response.data : { message: err.message };
  }
};

// Register Action
export const register = (userData) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://localhost:5173/api/auth/register",
      userData
    );
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    return res.data;
  } catch (err) {
    console.error("API Error:", err.response || err.message);
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response ? err.response.data : { message: err.message },
    });
    throw err.response ? err.response.data : { message: err.message };
  }
};
