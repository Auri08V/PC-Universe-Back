const { Router } = require('express');

const postPC = require('../Controllers/postControllers/postPC');
const login = require('../Controllers/postControllers/login');


const postDataRouter = Router();


postDataRouter.post('/login', login);

postDataRouter.post('/postpc', postPC);


module.exports = postDataRouter;
