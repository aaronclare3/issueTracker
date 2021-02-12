import {
  GET_PROJECT,
  GET_ALL_PROJECTS,
  UPDATE_PROJECT,
  DELETE_PROJECT,
  CREATE_PROJECT,
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
