const { getAllComponentesT } = require("../Controllers/componentesController");

const { Router } = require("express");
const componentesRouter = Router();
componentesRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const allComponentes = await getAllComponentesT();
  try {
    if (id) {
      const componenteId = allComponentes.find(
        (componente) => componente.id == id
      );
      componenteId
        ? res.status(200).send(componenteId)
        : res.status(404).json("Componente not found");
    }
  } catch (error) {
    return res.status(404).send(error.message);
  }
});

module.exports = componentesRouter;
