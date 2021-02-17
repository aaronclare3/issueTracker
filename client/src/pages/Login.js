import React, { useEffect } from "react";
import LoginForm from "../components/User/LoginForm";

const Login = ({ history, loggedIn }) => {
  useEffect(() => {
    if (loggedIn) {
      history.push("/dashboard");
    }
    console.log(loggedIn);
  }, [loggedIn]);
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default Login;
