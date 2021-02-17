import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { loginUser } from "../../redux/actions/userActions.js";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ username, password }));
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
        <button className='projectForm-btn btn' type='submit'>
          SIGN IN
        </button>
        <Link
          style={{
            textDecoration: "underline",
            color: "white",
          }}
          to='/register'>
          CREATE AN ACCOUNT
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
