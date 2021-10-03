import {
  GET_USER,
  GET_USER_FAILED,
  GET_USER_SUCCESS,
} from "../types/searchType";

const initState = {
  data: [],
  error: null,
};

export const searchReducer = (state = initState, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_USER:
      return state;
    case GET_USER_FAILED:
      return {
        ...state,
        error: payload,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        data: payload,
        error: "null",
      };
    default:
      return state;
  }
};
