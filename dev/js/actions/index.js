export const selectUser  = (user) => {
	console.log("You cliked on user:", user.first, user.last);
	return {
		type: "USER_SELECTED",
		payload: user
	}
};