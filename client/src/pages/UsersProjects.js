import React, { useEffect } from "react";
import ProjectList from "../components/Project/ProjectList";
import { getAllProjects } from "../redux/actions/projectActions";
import { useDispatch, useSelector } from "react-redux";
import "./UsersProjects.css";

const UsersProjects = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projectReducer.projects);

  useEffect(() => {
    dispatch(getAllProjects());
  }, []);

  return (
    <div>
      <ProjectList projectList={projects} />
    </div>
  );
};

export default UsersProjects;
