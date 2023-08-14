const { Router } = require('express');
const getComents = require('../Controllers/reviewsControllers/getComents');

const getcoments = Router();

getcoments.get('/getcoments', getComents);

module.exports = getcoments;