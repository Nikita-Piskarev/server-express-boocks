async function handleErrors(err, req, res, next) {
  console.dir(res.status);
  res.status(err.status || 500).send(err.message || "Server error");
}
module.exports.handleErrors = handleErrors;
