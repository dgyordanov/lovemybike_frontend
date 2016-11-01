import axios from 'axios';

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const applyFilters = (filters) => {
	return function (dispatch) {
		dispatch({'type': 'OFFERS_LOADING_START'});
		axios.get('https://lovemybike.herokuapp.com/offers')
			.then((response) => {
				dispatch({
					'type': 'OFFERS_LOADED_SUCCESS',
					offers: response.data,
					filters
				})
			})
			.catch(err => {
				dispatch({'type': 'OFFERS_LOADED_ERROR', err})
			})
	}
}
