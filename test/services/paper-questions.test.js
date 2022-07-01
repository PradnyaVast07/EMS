const app = require('../../src/app');

describe('\'paperQuestions\' service', () => {
  it('registered the service', () => {
    const service = app.service('paper-questions');
    expect(service).toBeTruthy();
  });
});
