import React from "react";
import ProjectForm from "../components/Project/ProjectForm";
import { Redirect } from "react-router-dom";

const Dashboard = ({ loggedIn, username }) => {
  return (
    <div>
      {loggedIn ? (
        <>
          <div style={{ textAlign: "center" }}>
            <h1>Welcome</h1>
            <h4>Create a project board...</h4>
          </div>
          <ProjectForm />
        </>
      ) : (
        <Redirect to='/' />
      )}
    </div>
  );
};

export default Dashboard;
