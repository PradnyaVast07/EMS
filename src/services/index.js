const users = require("./users/users.service.js");
const subjects = require("./subjects/subjects.service.js");
const topic = require("./topic/topic.service.js");
const questions = require("./questions/questions.service.js");
const answerOptions = require("./answer-options/answer-options.service");
const papers = require("./papers/papers.service.js");
const paperQuestions = require("./paper-questions/paper-questions.service.js");
const studentanswers = require("./studentanswers/studentanswers.service.js");
const studentPapers = require("./student-papers/student-papers.service.js");
const student = require("./student/student.service.js");

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(subjects);
  app.configure(topic);
  app.configure(questions);
  app.configure(answerOptions);
  app.configure(papers);
  app.configure(paperQuestions);
  app.configure(studentanswers);
  app.configure(studentPapers);
  app.configure(student);
};
