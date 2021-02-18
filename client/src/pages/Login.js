import React from "react";
import { Redirect } from "react-router-dom";
import LoginForm from "../components/User/LoginForm";
import { useSelector } from "react-redux";
import "./Login.css";

const Login = () => {
  const loggedIn = useSelector((state) => state.projectReducer.loggedIn);

  return (
    <div className='LoginContainer'>
      {loggedIn ? <Redirect to='/dashboard' /> : <LoginForm />}
    </div>
  );
};

export default Login;
