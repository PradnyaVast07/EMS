const { authenticate } = require('@feathersjs/authentication').hooks;
const { schema } = require("./topic.model");
const validate = require("feathers-validate-joi");
const fetchsubject = require("./hooks/fetchSubject");

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [validate.form(schema, { abortEarly: false }), fetchsubject()],
    update: [validate.form(schema, { abortEarly: false }), fetchsubject()],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
