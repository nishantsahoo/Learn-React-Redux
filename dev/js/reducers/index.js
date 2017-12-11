// This file will be used to combine all the reducers (data) that goes into the store

import {combineReducers} from "redux";
import UserReducer from "./reducer-users";

const allReducers = combineReducers({
	users: UserReducer
});