const app = require('../../src/app');

describe('\'papers\' service', () => {
  it('registered the service', () => {
    const service = app.service('papers');
    expect(service).toBeTruthy();
  });
});
