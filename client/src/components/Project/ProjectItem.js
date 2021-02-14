import React from "react";
import { Link } from "react-router-dom";
import "./ProjectItem.css";

const ProjectItem = ({ project }) => {
  return (
    <div className='projectItem'>
      <Link to={`/project/${project._id}`}>
        <div className='projectItemText'>
          <h2>{project.title}</h2>
          <h5>{project.description}</h5>
        </div>
      </Link>
    </div>
  );
};

export default ProjectItem;
