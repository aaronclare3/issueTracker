import React, { useEffect } from "react";
import "../styles/App.css";
import { useSelector, useDispatch } from "react-redux";
import { getProject, clearProject } from "../redux/actions/projectActions";

// components
import IssueList from "../components/Issue/IssueList";
import IssueForm from "../components/Issue/IssueForm";

const Project = ({ match }) => {
  const project = useSelector((state) => state.projectReducer.project);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProject(match.params.id));

    return () => dispatch(clearProject(match.params.id));
  }, [match.params.id]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{project && project.title}</h1>
      <IssueForm project={project} />
      {project.issues && <IssueList issues={project.issues} />}
    </div>
  );
};

export default Project;
