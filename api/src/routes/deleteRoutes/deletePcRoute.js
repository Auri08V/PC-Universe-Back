const Router = require("express");
const deletePc = require('../../Controllers/deleteControllers/deletePc');

const deletePcRoute = Router();

deletePcRoute.delete("/deletepc/:id", deletePc);

module.exports = deletePcRoute;
