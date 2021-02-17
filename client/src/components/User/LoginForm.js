import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginUser } from "../../redux/actions/userActions.js";
import { Link } from "react-router-dom";

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
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type='text'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Login User</button>
        <Link to='/register'>Sign Up</Link>
      </form>
    </div>
  );
};

export default LoginForm;
