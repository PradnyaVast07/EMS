const app = require('../../src/app');

describe('\'topic\' service', () => {
  it('registered the service', () => {
    const service = app.service('topic');
    expect(service).toBeTruthy();
  });
});
