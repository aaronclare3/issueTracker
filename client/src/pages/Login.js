import React from "react";
import { Redirect } from "react-router-dom";
import LoginForm from "../components/User/LoginForm";
import { useSelector } from "react-redux";

const Login = () => {
  const loggedIn = useSelector((state) => state.projectReducer.loggedIn);

  return <div>{loggedIn ? <Redirect to='/dashboard' /> : <LoginForm />}</div>;
};

export default Login;
