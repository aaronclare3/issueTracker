import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProject, clearProject } from "../redux/actions/projectActions";
import "./Project.css";

// components
import IssueListContainer from "../components/Issue/Lists/IssueListContainer";
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
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          {project && <ProjectInfo project={project} />}
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          {project.issues && <IssueListContainer issues={project.issues} />}
        </div>
      </div>
    </div>
  );
};

export default Project;
