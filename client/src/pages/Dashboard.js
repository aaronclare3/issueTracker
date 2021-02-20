import React, { useEffect, useState } from "react";
import ProjectForm from "../components/Project/ProjectForm";
import { Redirect } from "react-router-dom";
import ProjectList from "../components/Project/ProjectList";
import Slider from "../components/Slider";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getAllUsersProjects,
  clearProjects,
} from "../redux/actions/projectActions";
import "./Dashboard.css";

const Dashboard = ({ loggedIn, username }) => {
  const [list, setList] = useState(null);
  const [explore, setExplore] = useState(false);

  const userProjects = useSelector((state) => state.projectReducer.projects);
  const exploreProjects = useSelector(
    (state) => state.projectReducer.exploreProjects
  );

  const getListFromSlider = (left) => {
    // if slider is on left, set list to users projects, if on right, set list to explore
    left ? setList(userProjects) : setList(exploreProjects);
    left ? setExplore(false) : setExplore(true);
  };

  return (
    <div className='container dashboard'>
      <Slider getListFromSlider={getListFromSlider} />
      {list != null ? (
        <ProjectList list={list} explore={explore} />
      ) : (
        <ProjectList list={userProjects} explore={explore} />
      )}
    </div>

    // <div className='dashboardContainer'>
    //   {loggedIn ? (
    //     <>
    //       <div className='dashboard-left'>
    //         <div className='dashboardProjects'>
    //           <h4>{username.toUpperCase()}'S BOARDS</h4>
    //           {/* Only display first 3 items on dashboard page */}
    //           <ProjectList projectList={projects.filter((el, i) => i <= 2)} />
    //         </div>
    //         <Link to='/projects'>Your boards</Link>
    //       </div>
    //       <div className='dashboard-right'>
    //         <h4>CREATE ANOTHER BOARD</h4>
    //         <ProjectForm />
    //       </div>
    //       <div className='dashboard-bottom'>
    //         <h4>Explore All Projects</h4>
    //         <Slider />
    //       </div>
    //     </>
    //   ) : (
    //     <Redirect to='/' />
    //   )}
    // </div>
  );
};

export default Dashboard;
