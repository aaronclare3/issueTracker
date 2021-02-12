import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createProject } from "../redux/actions/projectActions";

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
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type='text'
          placeholder='Title...'
          value={projectTitle}
          onChange={(e) => handleTitleChange(e.target.value)}
        />
        <input
          type='text'
          placeholder='Description...'
          value={projectDescription}
          onChange={(e) => handleDescriptionChange(e.target.value)}
        />
        <button type='submit'>Add Project</button>
      </form>
    </div>
  );
};

export default ProjectForm;
