import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK, AUTH_ERROR } from 'admin-on-rest';

export default (type, params) => {
  if (type === AUTH_LOGIN) {
    const { username } = params;
    localStorage.setItem('username', username);
    return Promise.resolve();
  } // if
  if (type === AUTH_LOGOUT) {
    localStorage.removeItem('username');
    return Promise.resolve();
  } // if
  if (type === AUTH_CHECK) {
    return Promise.resolve();
  } // if
  if (type === AUTH_ERROR) {
    return localStorage.getItem('username') ? Promise.resolve() : Promise.reject();
  } // if
}; // export
