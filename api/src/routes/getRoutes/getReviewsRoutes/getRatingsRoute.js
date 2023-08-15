const { Router } = require('express');
const getRatings = require('../../../Controllers/getControllers/getRatings');

const ratings = Router();

ratings.get("/getratings", getRatings);

module.exports = ratings;