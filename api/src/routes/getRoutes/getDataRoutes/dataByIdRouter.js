const Router = require("express")

const getById = require("../../../Controllers/getControllers/getById");

const componentesRouter = Router();

componentesRouter.get("/producto/:id", getById)

module.exports = componentesRouter;