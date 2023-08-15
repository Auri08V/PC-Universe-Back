const { Router } = require('express');
const { createComentarioController } = require("../../../Controllers/reviewsControllers/comentariosControllers");

const comentarioRouter = Router()

comentarioRouter.post("/comentarios", createComentarioController)
module.exports = comentarioRouter