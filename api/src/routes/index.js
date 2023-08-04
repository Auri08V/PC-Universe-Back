// const { Router } = require("express");
// // const componentesRouter = require('./componentesRouter');
// const getDataByNameHandler = require("../handlers/componentesHandlers");
// const getAllData = require("../handlers/componentesHandlers");
// const getDataByIdController = require("../Controllers/componentesController");
// const router = Router();

// // router.use("/componentes", componentesRouter);
// router.use("/componentes/name", getDataByNameHandler.getDataByNameHandler);
// router.use("/componentes", getAllData.getAllData);
// router.use("/componentes/:id", getDataByIdController.getDataByIdController);
// module.exports = router;


const { Router } = require('express');
const componentesRouter = require('./componentesRouter');
// const temperamentsRouter = require('./temperamentsRouter');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/componentes", componentesRouter);

module.exports = router;
