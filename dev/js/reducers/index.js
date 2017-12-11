// This file will be used to combine all the reducers (data) that goes into the store

import {combineReducers} from "redux";
import UserReducer from "./reducer-users";
import ActiveUserReducer from "./reducer-active-user";

const allReducers = combineReducers({
	users: UserReducer,
	activeUser: ActiveUserReducer
});

export default allReducers;