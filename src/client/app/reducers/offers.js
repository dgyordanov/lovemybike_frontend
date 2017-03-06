const offers = (state = [], action) => {
  switch (action.type) {
    case 'OFFERS_LOADED_SUCCESS':
      return action.offers;
    case 'DELETE_SUBMITTED_LOCATION':
      return [];
  }
  return Object.assign([], state);
}

export default offers
