export function loginRequest(username, password) {
  return {
    type: 'LOGIN_REQUEST',
    username,
    password,
  };
}

export function loginSucess(username, password) {
  return {
    type: 'LOGIN_SUCCESS',
    username,
    password,
  };
}
