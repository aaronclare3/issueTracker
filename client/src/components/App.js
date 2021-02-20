import React, { useEffect, useState } from "react";
import Project from "../pages/Project";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkLoggedIn } from "../redux/actions/userActions";
import {
  getAllProjects,
  getAllUsersProjects,
  clearProjects,
} from "../redux/actions/projectActions";
import "./App.css";
import axios from "axios";

axios.defaults.withCredentials = true;

const App = () => {
  const loggedIn = useSelector((state) => state.projectReducer.loggedIn);
  const username = useSelector((state) => state.projectReducer.username);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProjects());
    dispatch(checkLoggedIn());
    dispatch(getAllUsersProjects());
    return () => dispatch(clearProjects());
  }, []);
  return (
    <div className='App'>
      <Router>
        <Header />
        {loggedIn && <Sidebar username={username} />}
        <Switch>
          <Route
            exact
            path='/project/:id'
            username={username}
            component={Project}
          />
          <Route
            path='/dashboard'
            render={(props) => (
              <Dashboard {...props} username={username} loggedIn={loggedIn} />
            )}
          />
          <Route path='/register' render={(props) => <Register {...props} />} />
          <Route exact path='/' render={(props) => <Login {...props} />} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
