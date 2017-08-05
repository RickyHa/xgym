
// import {jsonServerRestClient} from 'admin-on-rest';
// const restClient = jsonServerRestClient('http://localhost:3001');
import {jsonRestClient} from './rest';
import {fetchUtils} from 'admin-on-rest';

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({Accept: 'application/json'});
  } // if
  const token = localStorage.getItem('token');
  console.log(options);
  options.headers.set('Authorization', `${token}`);
  return fetchUtils.fetchJson(url, options);
};

const restClient = jsonRestClient('http://localhost:3001', httpClient);
export default (type, resource, params) => new Promise(resolve => setTimeout(() => resolve(restClient(type, resource, params)), 500));
