const { Router } = require("express");
const { getAllDataControllers } = require("../Controllers/getControllers/getAllDataControllers");

const createComponenteRoute = () => {
  const router = Router();
  router.get("/", getAllDataControllers);
  return router;
};

module.exports = {
  createComponenteRoute,
};