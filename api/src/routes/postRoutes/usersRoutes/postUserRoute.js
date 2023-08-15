const { Router } = require('express');

const postUsers = require('../../../Controllers/postControllers/postUsers');

const postuser = Router();

postuser.post('/signup', postUsers);

module.exports = postuser;