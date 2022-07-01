const app = require('../../src/app');

describe('\'AnswerOptions\' service', () => {
  it('registered the service', () => {
    const service = app.service('answer-options');
    expect(service).toBeTruthy();
  });
});
