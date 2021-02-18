import React, { useEffect } from "react";
import ProjectForm from "../components/Project/ProjectForm";
import { Redirect } from "react-router-dom";
import ProjectList from "../components/Project/ProjectList";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getAllUsersProjects,
  clearProjects,
} from "../redux/actions/projectActions";
import "./Dashboard.css";

const Dashboard = ({ loggedIn, username }) => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projectReducer.projects);

  useEffect(() => {
    dispatch(getAllUsersProjects());
    return () => dispatch(clearProjects());
  }, []);
  return (
    <div className='dashboardContainer'>
      {loggedIn ? (
        <>
          <div className='dashboard-left'>
            <div className='dashboardProjects'>
              <h4>{username.toUpperCase()}'S BOARDS</h4>
              {/* Only display first 3 items on dashboard page */}
              <ProjectList projectList={projects.filter((el, i) => i <= 2)} />
            </div>
            <Link to='/projects'>Your boards</Link>
          </div>
          <div className='dashboard-right'>
            <h4>CREATE ANOTHER BOARD</h4>
            <ProjectForm />
          </div>
          <div className='dashboard-bottom'>
            <h4>Explore All Projects</h4>
          </div>
        </>
      ) : (
        <Redirect to='/' />
      )}
    </div>
  );
};

export default Dashboard;
