module.exports = function () {
  return async (context) => {
    const studentId = context.data.studentId;

    const studentService = context.app.service("users");
    console.log("studentService", studentService);

    const student = await studentService.get(studentId);
    context.data.student = student;
    return context;
  };
};
