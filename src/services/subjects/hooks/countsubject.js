module.exports = function () {
  return (context) => {
    const subjects = context.data.subject;
    context.data.subject = subjects.lenght;
    return context;
  };
};
    