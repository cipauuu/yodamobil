import { combineReducers } from "redux";
import { searchReducer } from "./searchReducer";

const searchReducers = {
  searchData: searchReducer,
};

const reducers = combineReducers({
  ...searchReducers,
});

export default reducers;
