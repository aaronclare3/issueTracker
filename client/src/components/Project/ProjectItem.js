import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./ProjectItem.css";
import ProjectEdit from "./ProjectEdit";
import { deleteProject } from "../../redux/actions/projectActions";
import { useDispatch } from "react-redux";

const ProjectItem = ({ project }) => {
  const [hover, setHover] = useState(false);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const routeToProject = () => {
    console.log("rerouting...");
    history.push(`/project/${project._id}`);
  };
  const handleClose = () => {
    console.log("closing");
    setShow(false);
  };
  return (
    <>
      <div
        onClick={routeToProject}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className='projectItem card'>
        <div className='card-body rounded'>
          <div className='row'>
            <h5 className='card-title col-9'>{project.title}</h5>
            <div
              onClick={(e) => e.stopPropagation()}
              className='ml-auto col-2 d-flex align-items-start justify-content-end'>
              {hover && (
                <svg
                  onClick={(e) => setShow(true)}
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='bi bi-three-dots-vertical'
                  viewBox='0 0 16 16'>
                  <path d='M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z' />
                </svg>
              )}
            </div>
          </div>
          <div className='row projectItemBottom text-secondary'>
            <div className='col-8'>
              {
                project.issues.filter((issue) => issue.status === "Completed")
                  .length
              }
              /{project.issues.length} issues completed
            </div>
            <div className='col d-flex justify-content-end '></div>
          </div>
        </div>
      </div>
      <div>
        {show && (
          <ProjectEdit
            show={show}
            projectId={project._id}
            handleClose={handleClose}
          />
        )}
      </div>
    </>
  );
};

export default ProjectItem;
