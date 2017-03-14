const offers = (state = {content: [], pageIndex: 1, postOfferInProgress: false}, action) => {
  switch (action.type) {
    case 'OFFERS_LOADED_SUCCESS':
      return Object.assign({}, state, action.offers);
    case 'OFFER_PAGE_CHANGED':
      return Object.assign({}, state, {pageIndex: action.pageIndex});
    case 'DELETE_SUBMITTED_LOCATION':
      return {content: [], pageIndex: 1, postOfferInProgress: false};
    case 'POST_OFFER_START':
      return Object.assign({}, state, {postOfferInProgress: true});
    case 'POST_OFFER_SUCCESS':
    case 'POST_OFFER_ERROR':
      return Object.assign({}, state, {postOfferInProgress: false});
  }
  return Object.assign({}, state);
}

export default offers
