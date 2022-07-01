module.exports = function () {
  return async (context) => {
    const questionId = context.data.questionId;
    const questionService = context.app.service("questions");
    const question = await questionService.get(questionId);
    context.data.question = question;
    return context;
  };
};
