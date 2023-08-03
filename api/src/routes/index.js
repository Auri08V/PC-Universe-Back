const { Router } = require("express");
// const componentesRouter = require('./componentesRouter');
const getDataByNameHandler = require("../handlers/componentesHandlers");
const getAllData = require("../handlers/componentesHandlers");
const getDataByIdController = require("../Controllers/componentesController");
const router = Router();

// router.use("/componentes", componentesRouter);
router.use("/componentes/name", getDataByNameHandler.getDataByNameHandler);
router.use("/componentes", getAllData.getAllData);
router.use("/componentes/:id", getDataByIdController.getDataByIdController);
module.exports = router;
