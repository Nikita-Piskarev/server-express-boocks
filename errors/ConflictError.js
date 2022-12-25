const ApplicationError = require("./ApplicetianError");

class Conflict extends ApplicationError {
  constructor(massage) {
    super(409, massage || "This boock has already been published.");
  }
}
module.exports = Conflict;
