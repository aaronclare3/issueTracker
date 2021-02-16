import {
  REGISTER_USER,
  LOGIN_USER,
  CHECK_LOGGED_IN,
} from "../constants/userConstants";
import axios from "axios";

export const registerUser = (user) => async (dispatch) => {
  try {
    console.log("registering user");
    const userRegister = await axios
      .post("http://localhost:4000/users", user)
      .then((res) => res.data);
    dispatch({
      type: CHECK_LOGGED_IN,
      payload: true,
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
    console.log("Logging in user");
    const userLogin = await axios
      .post("http://localhost:4000/users/login", user)
      .then((res) => res.data);
    dispatch({
      type: CHECK_LOGGED_IN,
      payload: true,
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
    console.log(checkUser);
    dispatch({
      type: CHECK_LOGGED_IN,
      payload: checkUser,
    });
  } catch (error) {
    console.log(error);
  }
};
