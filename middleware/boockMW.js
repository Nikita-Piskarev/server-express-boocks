const {
  BOOCK_CREATION_SHEMA,
  BOOCK_UPDATE_SHEMA,
} = require("../utils/validationsShemas");

module.exports.validateCreateBoockMW = async (req, res, next) => {
  try {
    await BOOCK_CREATION_SHEMA.validate(req.body);
    next();
  } catch (error) {
    res.status(400).send(error.message);
  }
};
module.exports.validateUpdateBoockMW = async (req, res, next) => {
  try {
    await BOOCK_UPDATE_SHEMA.validate(req.body);
    next();
  } catch (error) {
    res.status(400).send(error.message);
  }
};
