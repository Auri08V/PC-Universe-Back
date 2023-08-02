const { Router } = require("express");
const getAllComponentesController = require("../Controllers/getAllComponentes");

const router = Router();

router.get(
  "/componentes/all",
  getAllComponentesController.getAllComponentesController
);

module.exports = router;
