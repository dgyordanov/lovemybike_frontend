const offers = (state = [], action) => {
  // TODO - read the offers from a rest service
  switch (action.type) {
    case 'OFFERS_LOADED_SUCCESS':
      return action.offers;
    default:
      return []

  }
  return state;
}

export default offers
