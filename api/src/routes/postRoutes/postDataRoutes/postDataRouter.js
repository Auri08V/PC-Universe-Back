const { Router } = require('express');

const postPC = require('../../../Controllers/postControllers/postPC');


const postpcR = Router();

postpcR.post('/postpc', postPC);


module.exports = postpcR;
