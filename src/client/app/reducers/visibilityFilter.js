const initialFilters = {
	"w": false,
	"m": false,
	"c": false
}

const visibilityFilter = (state = initialFilters, action) => {
	switch (action.type) {
		case 'SET_VISIBILITY_FILTER':
			let delta = {};
			delta[action.filter] = !state[action.filter];
			return Object.assign({}, state, delta)
		default:
			return state
	}
}

export default visibilityFilter
