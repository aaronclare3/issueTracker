import React, { useEffect, useState } from "react";
import UsersProjects from "../pages/UsersProjects";
import Project from "../pages/Project";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Sidebar from "./Sidebar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkLoggedIn } from "../redux/actions/userActions";
import "./App.css";
import axios from "axios";

axios.defaults.withCredentials = true;

const App = () => {
  const loggedIn = useSelector((state) => state.projectReducer.loggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkLoggedIn());
  }, []);

  return (
    <div className='App'>
      <Router>
        <Sidebar />
        <Switch>
          <Route
            path='/register'
            render={(props) => <Register {...props} loggedIn={loggedIn} />}
          />
          <Route
            exact
            path='/'
            render={(props) => <Login {...props} loggedIn={loggedIn} />}
          />
          <Route exact path='/project/:id' component={Project} />
          <Route path='/projects' component={UsersProjects} />
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
