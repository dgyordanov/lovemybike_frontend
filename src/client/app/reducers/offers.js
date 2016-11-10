const offers = (state = [], action) => {
  switch (action.type) {
    case 'OFFERS_LOADED_SUCCESS':
      return action.offers;
  }
  return Object.assign([], state);
}

export default offers
