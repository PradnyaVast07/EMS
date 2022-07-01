module.exports = function () {
  return async (context) => {
    const topicId = context.data.topicId;
    const topicService = context.app.service("topic");
    const topic = await topicService.get(topicId);
    context.data.topic = topic;
    return context;
  };
};
