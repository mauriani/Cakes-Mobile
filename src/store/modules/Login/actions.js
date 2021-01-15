export function loginRequest(email, password) {
  return {
    type: 'LOGIN',
    payload: {
      email,
      password,
    },
  };
}
