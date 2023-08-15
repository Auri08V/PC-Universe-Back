const { Router } = require('express');
const login = require('../../../Controllers/postControllers/login');

const loginR = Router();


loginR.post('/login', login);

module.exports = loginR;