// Initializes the `topic` service on path `/topic`
const { Topic } = require("./topic.class");
const createModel = require("../../models/Topic/topic.model");
const hooks = require("./topic.hooks");

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
  };

  // Initialize our service with any options it requires
  app.use("/topic", new Topic(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("topic");

  service.hooks(hooks);
};
