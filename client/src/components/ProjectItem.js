import React from "react";
import { Link } from "react-router-dom";

const ProjectItem = ({ project }) => {
  return (
    <Link to={`/project/${project._id}`}>
      <div
        style={{
          margin: "10px",
          border: "1px solid black",
          textAlign: "center",
        }}>
        <div>Project: {project.title}</div>
        <div>Description: {project.description}</div>
      </div>
    </Link>
  );
};

export default ProjectItem;
