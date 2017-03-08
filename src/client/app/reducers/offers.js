const offers = (state = {content: [], pageIndex: 1}, action) => {
  switch (action.type) {
    case 'OFFERS_LOADED_SUCCESS':
      return Object.assign({}, state, action.offers);
    case 'OFFER_PAGE_CHANGED':
      return Object.assign({}, state, {pageIndex: action.pageIndex});
    case 'DELETE_SUBMITTED_LOCATION':
      return {};
  }
  return Object.assign({}, state);
}

export default offers
