import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class UserList extends Component {

	renderItems() {
		return this.props.users.map((user => {
			return (
				<li key={user.id}>{user.first} {user.last}</li>
			)
		})
		)
	}

    render() {
        return (
            <ul>
                {this.renderItems()}
            </ul>
        );
    }
}

// mapStateToProps function will be used to pass this state or store data to the component

function mapStateToProps(state) {
	return {
		users: state.users
	};
}

export default connect(mapStateToProps)(UserList);

// ^ Makes your container aware about the store