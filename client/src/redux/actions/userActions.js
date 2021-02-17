import {
  REGISTER_USER,
  LOGIN_USER,
  CHECK_LOGGED_IN,
  LOGOUT_USER,
} from "../constants/userConstants";
import axios from "axios";

export const registerUser = (user) => async (dispatch) => {
  try {
    const userReg = await axios
      .post("http://localhost:4000/users", user)
      .then((res) => res.data);
    dispatch({
      type: REGISTER_USER,
      payload: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = (user) => async (dispatch) => {
  try {
    const userLoggedIn = await axios
      .post("http://localhost:4000/users/login", user)
      .then((res) => res.data);
    console.log(userLoggedIn);
    dispatch({
      type: LOGIN_USER,
      payload: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const checkLoggedIn = () => async (dispatch) => {
  try {
    const checkUser = await axios
      .get("http://localhost:4000/users/loggedIn")
      .then((res) => res.data);
    console.log(checkUser);
    dispatch({
      type: CHECK_LOGGED_IN,
      payload: checkUser,
    });
  } catch (error) {
    console.log(error);
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    await axios
      .get("http://localhost:4000/users/logout")
      .then((res) => res.data);
    dispatch({
      type: LOGOUT_USER,
      payload: false,
    });
  } catch (error) {
    console.log(error);
  }
};
