import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createProject } from "../../redux/actions/projectActions";
import "./ProjectForm.css";

const ProjectForm = () => {
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const dispatch = useDispatch();

  const handleTitleChange = (val) => {
    setProjectTitle(val);
  };
  const handleDescriptionChange = (val) => {
    setProjectDescription(val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const project = { title: projectTitle, description: projectDescription };
    dispatch(createProject(project));
    setProjectTitle("");
    setProjectDescription("");
  };
  return (
    <div>
      <form className='projectForm form' onSubmit={(e) => handleSubmit(e)}>
        <div className='form-group'>
          <input
            className='form-control'
            type='text'
            placeholder='Title...'
            value={projectTitle}
            onChange={(e) => handleTitleChange(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <input
            className='form-control'
            type='text'
            placeholder='Description...'
            value={projectDescription}
            onChange={(e) => handleDescriptionChange(e.target.value)}
          />
        </div>
        <button className='projectForm-btn btn' type='submit'>
          ADD BOARD
        </button>
      </form>
    </div>
  );
};

export default ProjectForm;
