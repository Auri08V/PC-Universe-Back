const { Router } = require('express');
const { createComentarioController } = require("../Controllers/reviewsControllers/comentariosControllers");

const comentarioRouter = Router()

comentarioRouter.post("/", createComentarioController)
module.exports = comentarioRouter