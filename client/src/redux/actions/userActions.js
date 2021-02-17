import {
  REGISTER_USER,
  LOGIN_USER,
  CHECK_LOGGED_IN,
  LOGOUT_USER,
} from "../constants/userConstants";
import axios from "axios";

export const registerUser = (user) => async (dispatch) => {
  try {
    const userRegister = await axios
      .post("http://localhost:4000/users", user)
      .then((res) => res.data);
    dispatch({
      type: CHECK_LOGGED_IN,
      payload: { loggedIn: true, user: user.username },
    });
    dispatch({
      type: REGISTER_USER,
      payload: userRegister,
    });
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = (user) => async (dispatch) => {
  try {
    const userLogin = await axios
      .post("http://localhost:4000/users/login", user)
      .then((res) => res.data);
    dispatch({
      type: CHECK_LOGGED_IN,
      payload: { loggedIn: true, user: user.username },
    });
    dispatch({
      type: LOGIN_USER,
      payload: userLogin,
    });
  } catch (error) {
    console.log(error);
  }
};

export const checkLoggedIn = (user) => async (dispatch) => {
  try {
    const checkUser = await axios
      .get("http://localhost:4000/users/loggedIn", user)
      .then((res) => res.data);
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
    const signoutUser = await axios
      .get("http://localhost:4000/users/logout")
      .then((res) => res.data);
    dispatch({
      type: CHECK_LOGGED_IN,
      payload: { loggedIn: false, user: undefined },
    });
    dispatch({
      type: LOGOUT_USER,
      payload: signoutUser,
    });
  } catch (error) {
    console.log(error);
  }
};
