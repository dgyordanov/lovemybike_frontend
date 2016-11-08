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
		axios.get('https://lovemybike.herokuapp.com/offers' + filterParam)
			.then((response) => {
				dispatch({
					'type': 'OFFERS_LOADED_SUCCESS',
					offers: response.data
				})
			})
			.catch(err => {
				dispatch({'type': 'OFFERS_LOADED_ERROR', err})
			})
	}
}
