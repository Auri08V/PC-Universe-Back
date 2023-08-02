const { Router } = require('express');

const { getComponentesHandler } = require('../handlers/componentesHandlers')

const componentesRouter = Router();

componentesRouter.get("/", getComponentesHandler);

componentesRouter.get("/:id", async (req, res) => {
    const id  = req.params.id
    const allComponentes = await getAllComponentes()
    try {
        if (id) {
            const componenteId = await allComponentes.find(componente => componente.id == (id))
            componenteId ? res.status(200).send(componenteId) : res.status(404).json("Componente no encontrado");
        }
    } catch (error) {
        return res.status(404).send(error.message)
    }
});

module.exports = componentesRouter;