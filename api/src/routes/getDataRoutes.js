const { Router } = require("express");
const {
  getAllDataControllers,
} = require("../Controllers/getControllers/getAllDataControllers");
const {
  getDataByIdController,
} = require("../Controllers/getControllers/getDataByIdControllers");

const createComponenteRoute = Router();

createComponenteRoute.get("/", getAllDataControllers);
createComponenteRoute.get("/:id", getDataByIdController);

module.exports = createComponenteRoute;
