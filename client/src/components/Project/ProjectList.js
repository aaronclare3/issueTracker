import React, { useEffect, useState } from "react";
import ProjectItem from "./ProjectItem";
import ProjectForm from "./ProjectForm";
import Searchbar from "../Searchbar";
import { useSelector, useDispatch } from "react-redux";
import { getAllProjects } from "../../redux/actions/projectActions";

const ProjectList = ({ userProjects, explore, exploreProjects, username }) => {
  const [searchedList, setSearchedList] = useState(null);
  // show addProject modal
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (explore) {
      dispatch(getAllProjects());
    }
  }, [explore]);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const passUpdatedList = (updatedListFromSearch) => {
    setSearchedList(updatedListFromSearch);
  };
  return (
    <div className='projectListContainer container mt-4'>
      <div className='row'>
        <div className='col'>
          <div className='row'>
            <h3 className='mr-2'>
              {explore
                ? "Explore Community Projects"
                : `${username}'s Projects`}
            </h3>
            <span className='mt-2'>
              {!explore && (
                <svg
                  onClick={handleShow}
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  fill='currentColor'
                  className='bi bi-plus-circle-fill'
                  viewBox='0 0 16 16'
                  style={{ cursor: "pointer" }}>
                  <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z' />
                </svg>
              )}
            </span>
          </div>
        </div>
        <div className='col d-flex justify-content-end'>
          <div className='row'>
            {explore ? (
              <Searchbar
                projects={exploreProjects}
                passUpdatedList={passUpdatedList}
              />
            ) : (
              <Searchbar
                projects={userProjects}
                passUpdatedList={passUpdatedList}
              />
            )}
          </div>
        </div>
      </div>
      <div className='row mt-3'>
        {(searchedList
          ? searchedList
          : explore
          ? exploreProjects
          : userProjects
        ).map((proj, i) => {
          return (
            <div
              key={proj._id}
              className={`col-6 m-0 p-0 ${i % 2 === 0 ? "pr-2" : "pl-2"} pb-3`}>
              <ProjectItem project={proj} />
            </div>
          );
        })}
      </div>
      {show && <ProjectForm handleClose={handleClose} show={show} />}
    </div>
  );
};

export default ProjectList;
