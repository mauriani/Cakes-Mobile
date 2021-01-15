import produce from 'immer';

export default function authenticated(state = false, action) {
  console.log(state);
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return true;
    default:
      return state;
  }
}
