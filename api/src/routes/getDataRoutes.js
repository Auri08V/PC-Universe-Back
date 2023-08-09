const { Router } = require("express");
const {
  getAllDataControllers,
} = require("../Controllers/getControllers/getAllDataControllers");
const createComponenteRoute = Router();
createComponenteRoute.get("/", getAllDataControllers);
module.exports = createComponenteRoute;
//Hola