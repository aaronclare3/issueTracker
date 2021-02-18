import React, { useEffect } from "react";
import ProjectList from "../components/Project/ProjectList";
import { getAllProjects, clearProjects } from "../redux/actions/projectActions";
import { useDispatch, useSelector } from "react-redux";
import "./UsersProjects.css";
import { Redirect } from "react-router-dom";

const UsersProjects = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projectReducer.projects);
  const loggedIn = useSelector((state) => state.projectReducer.loggedIn);
  const user = useSelector((state) => state.projectReducer.username);

  useEffect(() => {
    dispatch(getAllProjects());
    return () => dispatch(clearProjects());
  }, []);

  return (
    <div>
      {loggedIn ? (
        <div className='usersProjectsTitle'>
          <h3>{user.toUpperCase()}'S BOARDS</h3>
          <ProjectList projectList={projects} />
        </div>
      ) : (
        <Redirect to='/' />
      )}
    </div>
  );
};

export default UsersProjects;
