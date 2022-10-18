import { combineReducers } from "redux";
import userReducers from "./User/User.reducers";

export default combineReducers({
  user: userReducers
});

