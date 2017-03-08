const myoffers = (state = {content: [], pageIndex: 1}, action) => {
  switch (action.type) {
    case 'MY_OFFERS_LOADED_SUCCESS':
      return Object.assign({}, state, action.offers);
    case 'MY_OFFER_PAGE_CHANGED':
      return Object.assign({}, state, {pageIndex: action.pageIndex});
  }
  return Object.assign({}, state);
}

export default myoffers
