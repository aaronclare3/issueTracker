import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteProject } from "../../redux/actions/projectActions";
import "./ProjectEdit.css";

const ProjectEdit = ({ show, projectId }) => {
  const dispatch = useDispatch();

  const deleteProject = () => {
    console.log("dispatching delete!", projectId);
    dispatch(deleteProject(projectId));
  };

  return (
    <>
      <Modal show={show}>
        <Modal.Body>
          {/* <Button variant='secondary' onClick={() => handleModalClose("cancel")}>
            Close
        </Button>
        <Button variant='primary' onClick={() => handleModalClose("create")}>
            Save Changes
        </Button> */}
          <Button variant='primary' onClick={() => deleteProject()}>
            Delete Project
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProjectEdit;
