import React from "react";
import ProjectItem from "./ProjectItem";

const ProjectList = ({ projectList }) => {
  const renderProjectList = projectList.map((proj) => {
    return <ProjectItem key={proj._id} project={proj} />;
  });
  return (
    <div className='projectListContainer container mt-4'>
      <div className='row'>
        <div className='col'>
          <div className='row'>
            <h3 className='mr-2'>Your Projects</h3>
            <span className='mt-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                fill='currentColor'
                class='bi bi-plus-circle-fill'
                viewBox='0 0 16 16'>
                <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z' />
              </svg>
            </span>
          </div>
        </div>
        <div className='col d-flex justify-content-end'>
          <input type='text' placeholder='search placeholder' />
        </div>
      </div>
      <div className='row'>
        <div className='col-6'>{projectList && renderProjectList}</div>
      </div>
    </div>
  );
};

export default ProjectList;
