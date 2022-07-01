// Initializes the `AnswerOptions` service on path `/answer-options`
const { AnswerOptions } = require("./answer-options.class");
const createModel = require("../../models/AnswerOption/answer-options.model");
const hooks = require("./answer-options.hooks");

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
  };

  // Initialize our service with any options it requires
  app.use("/answer-options", new AnswerOptions(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("answer-options");

  service.hooks(hooks);
};
