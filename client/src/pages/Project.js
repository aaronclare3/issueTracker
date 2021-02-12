import React, { useState, useEffect } from "react";
import "../styles/App.css";
import { useSelector, useDispatch } from "react-redux";
import { getProject, clearProject } from "../redux/actions/projectActions";

// components
import IssueList from "../components/IssueList";
import IssueForm from "../components/IssueForm";

const Project = ({ match }) => {
  const [issues, setIssues] = useState([]);
  const project = useSelector((state) => state.projectReducer.project);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProject(match.params.id));

    return () => dispatch(clearProject(match.params.id));
  }, []);

  const changeStatus = (id, status) => {
    let updatedIssues = [...issues];
    for (let i in updatedIssues) {
      if (updatedIssues[i].id === id) {
        updatedIssues[i].status = status;
      }
    }
    setIssues(updatedIssues);
  };

  const editIssue = (id, newTitle, newDescription, newPriority) => {
    let updatedIssues = [...issues];
    for (let i in updatedIssues) {
      if (updatedIssues[i].id === id) {
        updatedIssues[i].title = newTitle;
        updatedIssues[i].description = newDescription;
        updatedIssues[i].priority = newPriority;
      }
    }
    setIssues(updatedIssues);
  };

  const getIssueFromForm = (issue) => {
    setIssues([...issues, issue]);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{project && project.title}</h1>
      <IssueForm getIssueFromForm={getIssueFromForm} />
      <IssueList
        editIssue={editIssue}
        issues={issues}
        changeStatus={changeStatus}
      />
    </div>
  );
};

export default Project;
