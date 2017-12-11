import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import allReducers from "./reducers/index";
import App from './components/app';

const store = createStore(allReducers);

// store take one big JavaScript object
// That's why we use combineReducers in reducers/index.js

// Provider stores all store data and makes it available to all containers
// Provider is the new root element

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
