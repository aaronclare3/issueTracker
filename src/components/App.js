import React from "react";
import Project from "../pages/Project";
import Dashboard from "../pages/Dashboard";
import Sidebar from "../components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Sidebar />
        <Switch>
          <Route path='/project' component={Project} />
          <Route exact path='/' component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
