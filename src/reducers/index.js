//reducers

import { combineReducers } from "redux";
import { pageReducer } from "./page";
import { userReducer } from "./user";

export const rootReducer = combineReducers({
  user: userReducer,
  page: pageReducer,
});