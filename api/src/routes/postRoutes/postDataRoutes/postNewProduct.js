
const { Router } = require('express');
const {createdComponenteController,createdPerifericoController }= require ("../../../Controllers/postControllers/createProductoController")


const newProduct = Router();

newProduct.post('/newcomponente', createdComponenteController);
newProduct.post('/newperiferico', createdPerifericoController);

module.exports = newProduct;
