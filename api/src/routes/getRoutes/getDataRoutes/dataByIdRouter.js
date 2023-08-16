const Router = require("express")
const { deleteProductsByIdController, revertDeleteProductController} = require ("../../../Controllers/deleteControllers/deleteRevertController")
const getById = require("../../../Controllers/getControllers/getById");

const componentesRouter = Router();

componentesRouter.get("/producto/:id", getById)
componentesRouter.patch("/producto/delete/:id",deleteProductsByIdController)
componentesRouter.patch("/producto/revert/:id",revertDeleteProductController)
module.exports = componentesRouter;