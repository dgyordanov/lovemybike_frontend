const offer = (state, action) => {
  switch (action.type) {
    case 'OFFER_LOADED_SUCCESS':
      return Object.assign({}, state, action.offer);
    case 'OFFER_LOADED_ERROR':
      //TODO
      console.log("Error loading offer");
      return Object.assign({}, state);
  }
  return Object.assign({}, state);
}

export default offer