import axios from 'axios';

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const applyFilters = (filters) => {
	return function (dispatch) {
	    // convert filters object to gender query
	    let filterQuery = Object.keys(filters)
	        .map((key, index) => filters[key] ? key : "")
	        .reduce(
                function(result, filterValue){ return result + filterValue }, "");

		dispatch({'type': 'OFFERS_LOADING_START'});
		let filterParam = filterQuery ? '?gender=' + filterQuery : '';
		axios.get('offers' + filterParam)
			.then((response) => {
				dispatch({
					'type': 'OFFERS_LOADED_SUCCESS',
					offers: response.data
				})
			})
			.catch(err => {
				console.log('error: ' + err);
				dispatch({'type': 'OFFERS_LOADED_ERROR', err})
			})
	}
}

export const login = (credentials) => {
	return function (dispatch) {
		dispatch({'type': 'LOGIN_START'});
		var config = {
			headers: {"Authorization": "Basic " + btoa(credentials.identifier + ":" + credentials.password)}
		};

		console.log('credentials');
		console.log(credentials);
		console.log('config:');
		console.log(config);
		axios.get('http://localhost:9000/login', config)
			.then((response) => {
				dispatch({
					'type': 'LOGIN_SUCCESS'
				})
			})
			.catch(err => {
				console.log('error: ' + err);
				dispatch({'type': 'LOGIN_ERROR', err})
			})
	}
}


