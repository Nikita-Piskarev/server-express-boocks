const express = require("express");
const BoockController = require("../controllers/boocks.controller");
const {
  validateCreateBoockMW,
  validateUpdateBoockMW,
} = require("../middleware/boockMW");

const boocksRouter = express.Router();

boocksRouter
  .route("/")
  .get(BoockController.getBoocks)
  .post(validateCreateBoockMW, BoockController.createBoock);

boocksRouter
  .route("/:boockId")
  .get(BoockController.getBoock)
  .put(validateUpdateBoockMW, BoockController.updateBoock)
  .delete(BoockController.deleteBoock);

module.exports = boocksRouter;
