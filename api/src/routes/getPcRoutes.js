
// // const componentesRouter = require('./componentesRouter');
// const componenteRoute = require ("./getDataRoutes")
 const { Router } = require('express');

const pcfinal = Router();
// // router.use("/componentes", componentesRouter);

// module.exports = router;
const getPC = require('../Controllers/getControllers/getPC');

pcfinal.get("/pc", getPC);

module.exports = pcfinal;