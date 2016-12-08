const auth = (state = [], action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      // TODO: store the token
      return {
      	token: action.token,
      	identifier: action.identifier
      };
    case 'LOGIN_ERROR':
      // TODO: delete the token
      return {
      	error: 'Invalid login'
      };
  }
  return Object.assign([], state);
}

export default auth