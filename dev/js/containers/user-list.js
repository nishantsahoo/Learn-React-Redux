import React, {Component} from 'react';
import {bindActionsCreators} from 'redux';
import {connect} from 'react-redux';

class UserList extends Component {
	render() {
		return (
			<ul>
				<li>one</li>
				<li>two</li>
				<li>three</li>
			</ul>
		)
	}
}

// mapStateToProps function will be used to pass this state or store data to the component

function mapStateToProps(state) {
	return  (
		users: state.users
	)
}

export default connect(mapStateToProps)(UserList);

// ^ Makes your container aware about the store