// Initializes the `studentPapers` service on path `/student-papers`
const { StudentPapers } = require("./student-papers.class");
const createModel = require("../../models/Student-Paper/student-papers.model");
const hooks = require("./student-papers.hooks");

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
  };

  // Initialize our service with any options it requires
  app.use("/student-papers", new StudentPapers(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("student-papers");

  service.hooks(hooks);
};
