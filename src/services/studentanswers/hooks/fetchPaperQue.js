module.exports = function () {
  return async (context) => {
    const paperQueId = context.data.paperQueId;

    const paperQueService = context.app.service("paper-questions");

    const paperQue = await paperQueService.get(paperQueId);
    context.data.paperQue = paperQue;
    return context;
  };
};
