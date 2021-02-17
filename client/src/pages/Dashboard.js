import React from "react";
import ProjectForm from "../components/Project/ProjectForm";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const username = useSelector((state) => state.projectReducer.user);
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        {username && <h1>Welcome {username}</h1>}
        <h4>Create a project board...</h4>
      </div>
      <ProjectForm />
    </div>
  );
};

export default Dashboard;
