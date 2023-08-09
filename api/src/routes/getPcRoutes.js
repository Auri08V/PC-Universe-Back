
 const { Router } = require('express');

const pcfinal = Router();

const getPC = require('../Controllers/getControllers/getPC');

pcfinal.get("/pc", getPC);

module.exports = pcfinal;