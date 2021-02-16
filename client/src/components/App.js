import React from "react";
import UsersProjects from "../pages/UsersProjects";
import Project from "../pages/Project";
import Dashboard from "../pages/Dashboard";
import RegisterForm from "../components/User/RegisterForm";
import LoginForm from "../components/User/LoginForm";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";

axios.defaults.withCredentials = true;

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path='/project/:id' component={Project} />
          <Route path='/projects' component={UsersProjects} />
          <Route path='/register' component={RegisterForm} />
          <Route path='/login' component={LoginForm} />
          <Route exact path='/' component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
