module.exports = function () {
  return async (context) => {
    const studentId = context.data.studentId;
    const studentService = context.app.service("users");
    const student = await studentService.get(studentId);
    context.data.student = student;
    return context;
  };
};
