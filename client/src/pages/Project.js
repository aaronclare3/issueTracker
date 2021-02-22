import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { getProject, clearProject } from "../redux/actions/projectActions";
import "./Project.css";

// components
import IssueListContainer from "../components/Issue/Lists/IssueListContainer";
import ProjectInfo from "../components/Project/ProjectInfo";

const Project = ({ match }) => {
  const project = useSelector((state) => state.projectReducer.project);
  const dispatch = useDispatch();
  const getLoggedIn = useSelector((state) => state.projectReducer.loggedIn);

  useEffect(() => {
    dispatch(getProject(match.params.id));

    return () => dispatch(clearProject(match.params.id));
  }, [match.params.id]);

  return (
    <div className='container'>
      {getLoggedIn !== false || undefined ? (
        <>
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
        </>
      ) : (
        <Redirect to='' />
      )}
    </div>
  );
};

export default Project;
