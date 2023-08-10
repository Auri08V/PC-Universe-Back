const Router = require("express");
const deletePc = require('../Controllers/deleteControllers/deletePc');

const deletePcRoute = Router();

deletePcRoute.delete("/deletepc", deletePc);

module.exports = deletePcRoute;
