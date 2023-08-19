import { combineReducers } from "redux";
import { addTodoReducer } from "../reducers/addTodoReducer";

export const rootReducer = combineReducers({
  todos: addTodoReducer,
});
