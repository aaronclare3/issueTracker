import React from "react";
import ProjectItem from "./ProjectItem";

const ProjectList = ({ projectList }) => {
  const renderProjectList = projectList.map((proj) => {
    return <ProjectItem key={proj._id} project={proj} />;
  });
  return <div>{projectList && renderProjectList}</div>;
};

export default ProjectList;
