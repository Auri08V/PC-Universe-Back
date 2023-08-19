const { Router } = require('express');
const putPrice = require('../../Controllers/putControllers/putPrice');

const price = Router();

price.put('/putPrice', putPrice);

module.exports = price;