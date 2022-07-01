module.exports = function () {
  return async (context) => {
    const paperId = context.data.paperId;
    const paperService = context.app.service("papers");
    const paper = await paperService.get(paperId);
    context.data.paper = paper;
    return context;
  };
};
