// import React from "react";
// import { useSelector } from "react-redux";
// import RegisterForm from "../components/User/RegisterForm";
// import { Redirect } from "react-router-dom";

// const Register = () => {
//   const loggedIn = useSelector((state) => state.projectReducer.loggedIn);
//   console.log(loggedIn);

//   return <div></div>;
// };

// export default Register;

import React from "react";
import { useSelector } from "react-redux";
import RegisterForm from "../components/User/RegisterForm";
import { Redirect } from "react-router-dom";

const Register = () => {
  const isLoggedIn = useSelector((state) => state.projectReducer.loggedIn);
  return (
    <div>{isLoggedIn ? <Redirect to='/dashboard' /> : <RegisterForm />}</div>
  );
};

export default Register;
