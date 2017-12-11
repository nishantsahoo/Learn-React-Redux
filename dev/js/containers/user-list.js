import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';

class UserList extends Component {

	renderItems() {
		return this.props.users.map((user => {
			return (
				<li 
				key={user.id}
				onClick={() => this.props.selectUser(user)}
				>
					{user.first} {user.last}
				</li>
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

function matchDispatchToProps(dispatch) {
	return bindActionCreators({selectUser: selectUser}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);

// ^ Makes your container aware about the store