const app = require('../../src/app');

describe('\'studentPapers\' service', () => {
  it('registered the service', () => {
    const service = app.service('student-papers');
    expect(service).toBeTruthy();
  });
});
