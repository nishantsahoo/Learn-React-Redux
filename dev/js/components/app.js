import React from 'react';
import UserList from '../containers/user-list'
import UserDetail from '../containers/User-detail'
require('../../scss/style.scss');

const App = () => (
	<div>
		<h2>User List:</h2>
		<UserList />
		<hr/>
		<h2>User details:</h2>
		<UserDetail />
	</div>
);

export default App;