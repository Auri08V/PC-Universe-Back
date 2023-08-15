const { Router } = require('express');
const getUsers = require('../../Controllers/getControllers/getUsers');

const users = Router();

users.get('/getusers', getUsers);

module.exports = users;