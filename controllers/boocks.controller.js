const Conflict = require("../errors/ConflictError");
const NotFoundError = require("../errors/NotFoundError");

const Boock = require("../models/Boock");

module.exports.getBoocks = async (req, res, next) => {
  try {
    const boocks = await Boock.findAll();
    res.send(boocks);
  } catch (error) {
    next(new NotFoundError(error.massage));
  }
};

module.exports.getBoock = async (req, res, next) => {
  const {
    params: { boockId },
  } = req;
  try {
    const foundBoock = await Boock.findOne(boockId);
    res.send(foundBoock);
  } catch (error) {
    next(new NotFoundError(error.massage));
  }
};

module.exports.createBoock = async (req, res, next) => {
  try {
    const newBoock = await Boock.create(req.body);
    res.send(newBoock);
  } catch (error) {
    next(new Conflict(error.massage));
  }
};

module.exports.updateBoock = async (req, res, next) => {
  const {
    params: { boockId },
    body,
  } = req;

  try {
    const updateBoock = await Boock.update(body, boockId);
    res.send(updateBoock);
  } catch (error) {
    next(new NotFoundError(error.massage));
  }
};

module.exports.deleteBoock = async (req, res, next) => {
  const {
    params: { boockId },
  } = req;
  try {
    const deleteBoock = await Boock.delete(boockId);
    res.send(deleteBoock);
  } catch (error) {
    next(new NotFoundError(error.massage));
  }
};
