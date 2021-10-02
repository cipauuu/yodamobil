import {
  GET_USER,
  GET_USER_FAILED,
  GET_USER_SUCCESS,
} from "../types/searchType";
import axios from "axios";

const getUserRqst = () => {
  return {
    type: GET_USER,
  };
};

const getUserFailed = (err) => {
  return {
    type: GET_USER_FAILED,
    payload: err,
  };
};

const getUserSuccess = (data) => {
  return {
    type: GET_USER_SUCCESS,
    payload: data,
  };
};

export const getUser = () => {
  return (dispatch) => {
    dispatch(getUserRqst());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        dispatch(getUserSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getUserFailed(err));
      });
  };
};
