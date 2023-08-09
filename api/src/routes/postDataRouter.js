

const { Router } = require('express');

const postUsers = require('../Controllers/postControllers/postUsers');
const postPC = require('../Controllers/postControllers/postPC');
const login = require('../Controllers/postControllers/login');


const postDataRouter = Router();

postDataRouter.post('/signup', postUsers);

postDataRouter.post('/login', login);

postDataRouter.post('/postpc', postPC);


module.exports = postDataRouter;
