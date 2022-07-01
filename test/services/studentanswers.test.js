const app = require('../../src/app');

describe('\'studentanswers\' service', () => {
  it('registered the service', () => {
    const service = app.service('studentanswers');
    expect(service).toBeTruthy();
  });
});
