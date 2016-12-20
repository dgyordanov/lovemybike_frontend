const initState = {
// TODO read the token from the local storage
    token: localStorage.getItem('authToken'),
    identifier: localStorage.getItem('identifier'),
    loginInProgress: false
}


const auth = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return Object.assign({}, state, {loginInProgress: true});
    case 'LOGIN_SUCCESS':
      // TODO: store the token
      return {
        token: action.token,
        identifier: action.identifier,
        loginInProgress: false
      };
    case 'LOGIN_ERROR':
      // TODO: delete the token
      return {
        error: 'Invalid login',
        loginInProgress: false
      };
  }
  return Object.assign({}, state);
}

export default auth