const { Router } = require('express');
const putStock = require('../../Controllers/putControllers/putStock');

const stock = Router();

stock.put('/putstock', putStock);

module.exports = stock;