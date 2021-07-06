import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import ProjectList from "../components/Project/ProjectList";
import Slider from "../components/Slider";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllUsersProjects,
  clearUserProjects,
} from "../redux/actions/projectActions";
import "./Dashboard.css";
import ProjectItem from "../components/Project/ProjectItem";

const Dashboard = ({ username }) => {
  const [explore, setExplore] = useState(false);
  const dispatch = useDispatch();
  const getLoggedIn = useSelector((state) => state.projectReducer.loggedIn);
  const userProjects = useSelector((state) => state.projectReducer.projects);
  const exploreProjects = useSelector(
    (state) => state.projectReducer.exploreProjects
  );

  useEffect(() => {
    console.log("dashboard remounting...", getLoggedIn);
    if (getLoggedIn) {
      dispatch(getAllUsersProjects());
    }
    return () => dispatch(clearUserProjects());
  }, [getLoggedIn]);

  const getListFromSlider = (left) => {
    left ? setExplore(false) : setExplore(true);
  };

  return (
    <div className='container dashboard'>
      {getLoggedIn !== false || undefined ? (
        <>
          <Slider getListFromSlider={getListFromSlider} />
          {userProjects && (
            <ProjectList
              username={username}
              userProjects={userProjects}
              exploreProjects={exploreProjects}
              explore={explore}
            />
          )}
        </>
      ) : (
        <Redirect to='' />
      )}
    </div>
  );
};

export default Dashboard;
