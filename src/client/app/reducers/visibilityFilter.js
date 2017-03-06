const initialFilters = {
    gender: {
                "w": false,
                "m": false,
                "c": false
            }
};

const visibilityFilter = (state = initialFilters, action) => {
	switch (action.type) {
		case 'SET_VISIBILITY_FILTER':
			let result = Object.assign({}, state);
			result.gender[action.filter] = !state.gender[action.filter];
			return result;
		case 'SET_LOCATION':
		    return Object.assign({}, state, {location: action.location});
		case 'SUBMIT_LOCATION':
		    return Object.assign({}, state, {submittedLocation: state.location});
		case 'DELETE_SUBMITTED_LOCATION':
		    return Object.assign({}, state, {submittedLocation: ""});
		default:
			return state;
	}
}

export default visibilityFilter
