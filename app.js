const express = require("express");
const { handleErrors } = require("./hendleErrors");
const router = require("./routers");
const app = express();

app.use(express.json());
app.use("/api", router);
app.use(handleErrors);

module.exports = app;
