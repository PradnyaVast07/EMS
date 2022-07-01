const adminUser = require("./users")();

function Admincreate(name, data) {
  return async () => {
    try {
      let users = await this.service(name).find({ query: { isAdmin: true } });

      if (users.total === 0) {
        try {
          let createuserRecord = await this.service(name).create(data);
          console.log("create", createuserRecord.adminUser);
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("Admin already created through script");
      }
    } catch (error) {
      console.log(error);
    }
  };
}
module.exports = function () {
  const app = this;
  Admincreate = Admincreate.bind(this);
  try {
    app.configure(Admincreate("users", adminUser));
  } catch (error) {
    console.log(`In the app`, error);
  }
  };
