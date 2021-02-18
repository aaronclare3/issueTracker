import {
  GET_PROJECT,
  GET_ALL_USERS_PROJECTS,
  GET_ALL_PROJECTS,
  UPDATE_PROJECT,
  DELETE_PROJECT,
  CREATE_PROJECT,
  CLEAR_PROJECT,
  CLEAR_PROJECTS,
} from "../constants/projectConstants";
import axios from "axios";

export const createProject = (project) => async (dispatch) => {
  try {
    const projectAdd = await axios
      .post("http://localhost:4000/projects", project)
      .then((res) => res.data);
    dispatch({
      type: CREATE_PROJECT,
      payload: projectAdd,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllUsersProjects = () => async (dispatch) => {
  try {
    const allProjects = await axios
      .get("http://localhost:4000/projects")
      .then((res) => res.data);
    dispatch({
      type: GET_ALL_USERS_PROJECTS,
      payload: allProjects,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getProject = (id) => async (dispatch) => {
  try {
    const project = await axios
      .get(`http://localhost:4000/projects/${id}`)
      .then((res) => res.data);
    dispatch({
      type: GET_PROJECT,
      payload: project,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProject = (id) => async (dispatch) => {
  try {
    const project = await axios
      .delete(`http://localhost:4000/projects/${id}`)
      .then((res) => res.data);
    dispatch({
      type: DELETE_PROJECT,
      payload: project,
    });
  } catch (error) {
    console.log(error);
  }
};

export const clearProject = (id) => async (dispatch) => {
  try {
    dispatch({
      type: CLEAR_PROJECT,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};

export const clearProjects = () => async (dispatch) => {
  try {
    dispatch({
      type: CLEAR_PROJECTS,
    });
  } catch (error) {
    console.log(error);
  }
};
