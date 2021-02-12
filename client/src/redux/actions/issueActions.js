import {
  CREATE_ISSUE,
  DELETE_ISSUE,
  UPDATE_ISSUE,
} from "../constants/issueConstants";
import { updateProject } from "./projectActions";
import axios from "axios";
import { UPDATE_PROJECT } from "../constants/projectConstants";

export const createIssue = (issue) => async (dispatch) => {
  try {
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
