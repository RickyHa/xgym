import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK, AUTH_ERROR } from 'admin-on-rest';

export default (type, params) => {
  if (type === AUTH_LOGIN) {
    const { username, password } = params;
    const request = new Request("http://localhost:3001/auth", {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: new Headers({'Content-type': 'application/json'}),
    });
    return fetch(request).then(response => {
        if (response.status < 200 || response.status > 300) {
          // throw new Error(response.statusText);
        } // if
        return response.json();
      }).then (({token, message}) => {
        if (token) {
          localStorage.setItem('token', token);
        } else if (message) {
          throw new Error(message);
        } // else
      });
    // localStorage.setItem('username', username);
    // return Promise.resolve();
  } // if
  if (type === AUTH_LOGOUT) {
    localStorage.removeItem('token');
    return Promise.resolve();
  } // if
  if (type === AUTH_CHECK) {
    // return Promise.resolve();
    return localStorage.getItem('token') ? Promise.resolve() : Promise.reject({redirectTo: '/no-access'});
  } // if
  if (type === AUTH_ERROR) {
    // return localStorage.getItem('username') ? Promise.resolve() : Promise.reject();
    const {status} = params;
    if (status === 401 || status === 403) {
      localStorage.removeItem('token');
      return Promise.reject();
    } // if
    return Promise.resolve();
  } // if
}; // export
