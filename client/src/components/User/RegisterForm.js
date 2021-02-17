import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/actions/userActions.js";
import { useHistory, Link } from "react-router-dom";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({ username, password, verifyPassword }));
    history.push("/dashboard");
  };

  return (
    <div>
      <form className='projectForm form' onSubmit={(e) => handleSubmit(e)}>
        <div className='form-group'>
          <input
            className='form-control'
            type='text'
            placeholder='Username...'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <input
            className='form-control'
            type='text'
            placeholder='Password...'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <input
            className='form-control'
            type='text'
            placeholder='Verify Password...'
            value={verifyPassword}
            onChange={(e) => setVerifyPassword(e.target.value)}
          />
        </div>
        <button className='projectForm-btn btn' type='submit'>
          SIGN UP
        </button>
        <Link style={{ textDecoration: "underline", color: "white" }} to='/'>
          SIGN IN
        </Link>
      </form>
    </div>
  );
};

export default RegisterForm;
