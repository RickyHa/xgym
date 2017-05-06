/* global data */
import FakeRest from 'fakerest';
import FetchMock from 'fetch-mock';

export default () => {
  const restServer = new FakeRest.FetchServer('http://localhost:3000');
  restServer.init(data); // data is public in ./public folder
  restServer.toggleLogging(); // logging is off by default => enable it
  FetchMock.mock('begin:http://localhost:3000', restServer.getHandler());
  return () => FetchMock.restore();
}; // export
