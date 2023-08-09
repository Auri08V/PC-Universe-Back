
const { Router } = require('express');

const pcfinal = Router();

const getPC = require('../Controllers/getControllers/getPc');

pcfinal.get("/pc", getPC);

module.exports = pcfinal;