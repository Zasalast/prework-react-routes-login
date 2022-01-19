import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";

export const UserReducer = () => {};
export const CopyReducer = (state) => {};

const todoApp = combineReducers({
  copy: CopyReducer,
  user: UserReducer,
  todos,
  visibilityFilter,
});

export default todoApp;
