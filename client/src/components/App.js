import React, { useEffect, useState } from "react";
import UsersProjects from "../pages/UsersProjects";
import Project from "../pages/Project";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkLoggedIn } from "../redux/actions/userActions";
import "./App.css";
import axios from "axios";

axios.defaults.withCredentials = true;

const App = () => {
  const loggedIn = useSelector((state) => state.projectReducer.loggedIn);
  const username = useSelector((state) => state.projectReducer.username);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkLoggedIn());
  }, []);
  return (
    <div className='App'>
      <Router>
        {loggedIn && <Sidebar />}
        <Switch>
          <Route
            exact
            path='/project/:id'
            username={username}
            component={Project}
          />
          <Route
            path='/projects'
            render={(props) => (
              <UsersProjects
                {...props}
                loggedIn={loggedIn}
                username={username}
              />
            )}
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
