import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions/userActions.js";

const LoginForm = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ username, password }));
    history.push("/");
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
      </form>
    </div>
  );
};

export default LoginForm;
