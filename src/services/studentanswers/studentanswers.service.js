// Initializes the `studentanswers` service on path `/studentanswers`
const { Studentanswers } = require("./studentanswers.class");
const createModel = require("../../models/studentAnswer/studentanswers.model");
const hooks = require("./studentanswers.hooks");

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
  };

  // Initialize our service with any options it requires
  app.use("/studentanswers", new Studentanswers(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("studentanswers");

  service.hooks(hooks);
};
