import {
  CREATE_ISSUE,
  DELETE_ISSUE,
  UPDATE_ISSUE,
} from "../constants/issueConstants";
import { updateProject } from "./projectActions";
import axios from "axios";

export const createIssue = (issue) => async (dispatch) => {
  try {
    console.log(issue);
    const issueAdd = await axios
      .post("http://localhost:4000/issues", issue)
      .then((res) => res.data);
    dispatch({
      type: CREATE_ISSUE,
      payload: issueAdd,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateIssue = (issue, id) => async (dispatch) => {
  try {
    const issueUpdated = await axios
      .patch(`http://localhost:4000/issues/${id}`, issue)
      .then((res) => res.data);
    dispatch({
      type: UPDATE_ISSUE,
      payload: issueUpdated,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteIssue = (id) => async (dispatch) => {
  try {
    const issueDeleted = await axios
      .delete(`http://localhost:4000/issues/${id}`)
      .then((res) => res.data);
    dispatch({
      type: DELETE_ISSUE,
      payload: issueDeleted,
    });
  } catch (error) {
    console.log(error);
  }
};
