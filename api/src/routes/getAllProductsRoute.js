const { Router } = require('express');
const getAllProducts = require('../Controllers/getControllers/getAllProducts');
const getAllP = Router();

getAllP.get("/", getAllProducts);

module.exports = getAllP;