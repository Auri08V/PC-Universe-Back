const { Router } = require('express');
const getComents = require('../../../Controllers/reviewsControllers/getComents');
const getAllComents = require('../../../Controllers/reviewsControllers/getAllComents');

const getcoments = Router();

getcoments.get('/getcoments', getComents);

getcoments.get('/allcoments', getAllComents);


module.exports = getcoments;