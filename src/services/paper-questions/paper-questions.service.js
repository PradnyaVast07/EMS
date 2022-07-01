// Initializes the `paperQuestions` service on path `/paper-questions`
const { PaperQuestions } = require("./paper-questions.class");
const createModel = require("../../models/Paper-Question/paper-questions.model");
const hooks = require("./paper-questions.hooks");

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
  };

  // Initialize our service with any options it requires
  app.use("/paper-questions", new PaperQuestions(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("paper-questions");

  service.hooks(hooks);
};
