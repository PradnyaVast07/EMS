module.exports = function () {
  return async (context) => {
    const subjectId = context.data.subjectId;
    const subjectService = context.app.service("subjects");
    const subject = await subjectService.get(subjectId);
    context.data.subject = subject;
    return context;
  };
};
