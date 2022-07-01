module.exports = function () {
  return async (context) => {
    const optionId = context.data.optionId;
    const optionService = context.app.service("answer-options");
    const option = await optionService.get(optionId);
    context.data.option = option;
    return context;
  };
};
