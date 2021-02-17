import React from "react";
import ProjectForm from "../components/Project/ProjectForm";
import { Redirect } from "react-router-dom";

const Dashboard = ({ loggedIn, username }) => {
  return (
    <div>
      {loggedIn ? (
        <>
          <div style={{ textAlign: "center" }}>
            {username && <h1>Welcome {username}</h1>}
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
