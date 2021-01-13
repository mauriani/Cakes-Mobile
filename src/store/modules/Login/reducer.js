import produce from 'immer';

export default function authenticated(state = false, action) {
  console.log(state);
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return true;

    default:
      return state;
  }
}
