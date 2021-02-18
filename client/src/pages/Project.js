import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProject, clearProject } from "../redux/actions/projectActions";
import "./Project.css";

// components
import IssueList from "../components/Issue/IssueList";
import IssueForm from "../components/Issue/IssueForm";
import ProjectInfo from "../components/Project/ProjectInfo";

const Project = ({ match }) => {
  const project = useSelector((state) => state.projectReducer.project);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProject(match.params.id));

    return () => dispatch(clearProject(match.params.id));
  }, [match.params.id]);

  return (
    <div className='projectPageContainer'>
      <div className='project-left'>
        <IssueForm project={project} />
      </div>
      <div className='project-right'>
        {project && <ProjectInfo project={project} />}
      </div>
      <div className='project-bottom'>
        {project.issues && <IssueList issues={project.issues} />}
      </div>
    </div>
  );
};

export default Project;
