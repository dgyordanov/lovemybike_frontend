import axios from 'axios'
import { setAuthToken } from '../util/auth'
import { browserHistory } from 'react-router'

// For dev purposes
const baseUrl = 'http://localhost:9000/';

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const locationChanged = (location) => {
  return {
    type: 'SET_LOCATION',
    location
  }
}

export const locationSubmit = (location) => {
  // Filter the offers by this location
  return function (dispatch, getState) {
    dispatch({'type': 'SUBMIT_LOCATION'});
    dispatch({
        'type': 'OFFER_PAGE_CHANGED',
        'pageIndex' : 1
    });
    dispatch(loadOffers());
  }
}

export const applyFilters = () => {
  // Filter the offers by this location
  return function (dispatch, getState) {
    dispatch({
        'type': 'OFFER_PAGE_CHANGED',
        'pageIndex' : 1
    });
    dispatch(loadOffers());
  }
}

export const locationDelete = () => {
  return {
        type: 'DELETE_SUBMITTED_LOCATION',
    location
  }
}

export const loadOffers = () => {
	return function (dispatch, getState) {
		dispatch({'type': 'OFFERS_LOADING_START'});

	    let queryFilters = [];

	    // convert gender object to gender query
	    const gender = getState().visibilityFilter.gender;
	    let selectedGenders = Object.keys(gender)
	        .map((key, index) => gender[key] ? key : "")
	        .reduce(
                function(result, filterValue){ return result + filterValue }, "");
		selectedGenders && queryFilters.push('gender=' + selectedGenders);

		const submittedLocation = getState().visibilityFilter.submittedLocation;
		submittedLocation && queryFilters.push('location=' + submittedLocation);

		queryFilters.push('pageNumber=' + getState().offers.pageIndex);

		axios.get(baseUrl + 'offers?' + queryFilters.join('&'))
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

export const myOffers = () => {
	return function (dispatch, getState) {
		dispatch({'type': 'MY_OFFERS_LOADING_START'});
		axios.get(baseUrl + 'offers/@my?pageNumber=' + getState().myoffers.pageIndex)
			.then((response) => {
				dispatch({
					'type': 'MY_OFFERS_LOADED_SUCCESS',
					offers: response.data
				});
				browserHistory.push('/myoffers');
			})
			.catch(err => {
				console.log('error: ' + err);
				dispatch({'type': 'MY_OFFERS_LOADED_ERROR', err})
			})
	}
}

export const login = (credentials) => {
	return function (dispatch) {
		dispatch({'type': 'LOGIN_START'});
		const token = "Basic " + btoa(credentials.identifier + ":" + credentials.password);
		const config = {
			headers: {"Authorization": token}
		};
		axios.get(baseUrl + 'login', config)
			.then((response) => {
				localStorage.setItem('authToken', token);
				localStorage.setItem('identifier', credentials.identifier);
				setAuthToken(token);
				dispatch({
					type: 'LOGIN_SUCCESS',
					token,
					identifier: credentials.identifier
				});
				browserHistory.push('/');
			})
			.catch(err => {
				console.log('error: ' + err);
				dispatch({'type': 'LOGIN_ERROR', err})
			})
	}
}

export const signup = (data) => {
	return function (dispatch) {
		dispatch({'type': 'SIGNUP_START'});
		axios.post(baseUrl + 'account', data)
			.then((response) => {
				const token = "Basic " + btoa(data.email + ":" + data.password);
				localStorage.setItem('authToken', token);
				localStorage.setItem('identifier', data.email);
				setAuthToken(token);

				dispatch({
					type: 'SIGNUP_SUCCESS'
				});

				dispatch({
					type: 'LOGIN_SUCCESS',
					token,
					identifier: data.email
				});

				browserHistory.push('/');
			})
			.catch(err => {
				console.log('error: ' + err);
				dispatch({'type': 'SIGNUP_ERROR', err})
			})
	}
}

export const pageChanged = (pageIndex) => {
    return function(dispatch) {
        dispatch({
            'type': 'OFFER_PAGE_CHANGED',
            pageIndex
        });
        dispatch(loadOffers());
    }
}

export const myOffersPageChanged = (pageIndex) => {
    return function(dispatch) {
        dispatch({
            'type': 'MY_OFFER_PAGE_CHANGED',
            pageIndex
        });
        dispatch(myOffers());
    }
}

export const postOffer = (data) => {
	return function (dispatch) {
		dispatch({'type': 'POST_OFFER_START'});

        let formData = new FormData();
        Object.keys(data).forEach(( key ) => {
            if (key === 'images') {
                data[ key ].forEach((image, i) => {
                    if (image) {
                       formData.append("image" + i, image);
                    }
                });
            } else {
                formData.append(key, data[ key ]);
            }
        });

        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }

		axios.post(baseUrl + 'offers', formData, config)
			.then((response) => {
				dispatch({
					type: 'POST_OFFER_SUCCESS'
				});
				dispatch(showOffer(response.data.id));
			})
			.catch(err => {
				console.log('error: ' + err);
				dispatch({'type': 'POST_OFFER_ERROR', err})
			});
	}
}

export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}

export const showOffer = (offerId) => {
	return function (dispatch, getState) {
		dispatch({'type': 'OFFER_LOADING_START'});
		axios.get(baseUrl + 'offers/' + offerId)
			.then((response) => {
				dispatch({
					'type': 'OFFER_LOADED_SUCCESS',
					offer: response.data
				});
				browserHistory.push('/offer/' + offerId);
			})
			.catch(err => {
				console.log('error: ' + err);
				dispatch({'type': 'OFFER_LOADED_ERROR', err})
			})
	}
}
