const { dataFilter } = require("../../../Controllers/filterControllers/filterController");
const Router = require("express");
const dataFilterRouter = Router()

dataFilterRouter.get("/filter", dataFilter)

module.exports = dataFilterRouter
