const { Router } = require('express');

const {
  getDataByName,
} = require("../Controllers/getControllers/getDataByNameControllers");

const routeByName = Router()


routeByName.get("/", getDataByName);

module.exports = routeByName;
