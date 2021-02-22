import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createProject } from "../../redux/actions/projectActions";
import "./ProjectForm.css";

const ProjectForm = ({ show, handleClose }) => {
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectCodeLink, setProjectCodeLink] = useState("");
  const dispatch = useDispatch();

  const handleModalClose = (option) => {
    if (option === "cancel") {
      // if user isn't saving we want to reset modal back to what it was
      handleClose();
    } else if (option === "create") {
      // if they do save, handle add and close
      dispatch(
        createProject({
          title: projectTitle,
          description: projectDescription,
          codeLink: projectCodeLink,
        })
      );
      setProjectTitle("");
      setProjectDescription("");
      setProjectCodeLink("");
      handleClose();
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <div className='projectModal'>
          <Modal.Body>
            <input
              style={{ width: "100%", marginBottom: "20px" }}
              className='form-control'
              type='text'
              placeholder='Project Title'
              onChange={(e) => setProjectTitle(e.target.value)}
              value={projectTitle}
            />
            <input
              placeholder='Project Description'
              style={{ marginBottom: "20px" }}
              className='form-control'
              type='text'
              onChange={(e) => setProjectDescription(e.target.value)}
              value={projectDescription}
            />
            <input
              placeholder='Link your code repository'
              style={{ marginBottom: "20px" }}
              className='form-control'
              type='text'
              onChange={(e) => setProjectCodeLink(e.target.value)}
              value={projectCodeLink}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant='secondary'
              onClick={() => handleModalClose("cancel")}>
              Close
            </Button>
            <Button
              variant='primary'
              onClick={() => handleModalClose("create")}>
              Save Changes
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};

export default ProjectForm;
