import React from "react";
import RegisterForm from "../components/User/RegisterForm";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <RegisterForm />
      <Link to='/'>Sign In</Link>
    </div>
  );
};

export default Register;
