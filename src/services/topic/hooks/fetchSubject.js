module.exports = function () {
  return async (context) => {
    const subjectId = context.data.subjectId;
    console.log(" subjectId ", subjectId);
    const subjectService = context.app.service("subjects");
    console.log("subjectService", subjectService);
    const subject = await subjectService.get(subjectId);

    context.data.subject = subject;
    return context;
  };
};
