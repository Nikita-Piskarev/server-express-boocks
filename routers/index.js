const express = require("express");
const boockRouter = require("./boocksRouter");
const rootRouter = express.Router();

rootRouter.use("/boocks", boockRouter);

module.exports = rootRouter;
