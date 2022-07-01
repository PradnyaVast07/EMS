//const { authenticate } = require('@feathersjs/authentication').hooks;
const { schema } = require("./questions.model");
const validate = require("feathers-validate-joi");
const fetchTopic = require("./hooks/fetchTopic");

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      validate.form(schema, { abortEarly: false }),
      fetchTopic(),
     
    ],
    update: [validate.form(schema, { abortEarly: false }), fetchTopic()],
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
