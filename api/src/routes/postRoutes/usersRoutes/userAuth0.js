const {Router} = require('express');

const postUserAuth0 = require('../../../Controllers/postControllers/postUserAuth0');

const userAuth0 = Router();

userAuth0.post('/signupauth0', postUserAuth0);

module.exports = userAuth0;