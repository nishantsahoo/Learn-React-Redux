// this will listen for the action USER_SELECTED

export default function (state=null, action) {
	switch(action.type) {
		case "USER_SELECTED":
			return action.payload;
			break;
	}
	return state;
}

// can't return undefined
// so we set a default value

// All reducers return some data