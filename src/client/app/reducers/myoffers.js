const myoffers = (state = [], action) => {
  switch (action.type) {
    case 'MY_OFFERS_LOADED_SUCCESS':
      return action.offers;
  }
  return Object.assign([], state);
}

export default myoffers
