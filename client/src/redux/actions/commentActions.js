import { CREATE_COMMENT } from "../constants/commentConstants";
import axios from "axios";

export const createComment = (comment) => async (dispatch) => {
  try {
    const commentAdd = await axios
      .post("http://localhost:4000/comments", comment)
      .then((res) => res.data);
    dispatch({
      type: CREATE_COMMENT,
      payload: commentAdd,
    });
  } catch (error) {}
};
