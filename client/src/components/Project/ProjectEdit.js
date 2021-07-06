import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteProject } from "../../redux/actions/projectActions";
import "./ProjectEdit.css";

const ProjectEdit = ({ show, projectId, handleClose }) => {
  const dispatch = useDispatch();

  const handleModalClose = (option) => {
    if (option === "cancel") {
      handleClose();
    } else if (option === "delete") {
      dispatch(deleteProject(projectId));
      handleClose();
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Button
            variant='secondary'
            onClick={() => handleModalClose("cancel")}>
            Close
          </Button>
          <Button variant='primary' onClick={() => handleModalClose("delete")}>
            Delete Project
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProjectEdit;
