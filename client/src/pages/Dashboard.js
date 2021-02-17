import React from "react";
import ProjectForm from "../components/Project/ProjectForm";

const Dashboard = ({ loggedIn }) => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        {loggedIn && <h1>Welcome {loggedIn}</h1>}
        <h4>Create a project board...</h4>
      </div>
      <ProjectForm />
    </div>
  );
};

export default Dashboard;
