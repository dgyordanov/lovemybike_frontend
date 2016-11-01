const offers = (state = [], action) => {
  // TODO - read the offers from a rest service
  switch (action.type) {
    case 'OFFERS_LOADED_SUCCESS':
      debugger;
      if (!action.filters.w && !action.filters.m && !action.filters.c){
        return action.offers;
      }

      // TODO improve it
      let result = action.offers;
      if (!action.filters.w) {
        result = result.filter(offer => offer.gender !== "w");
      }
      if (!action.filters.m) {
        result = result.filter(offer => offer.gender !== "m");
      }
      if (!action.filters.c) {
        result = result.filter(offer => offer.gender !== "c");
      }
      return result;

    default:
      return state

  }
  return state;
}

export default offers
