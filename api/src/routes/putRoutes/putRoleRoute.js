const { Router } = require('express');
const putRole = require('../../Controllers/putControllers/putRole');

const role = Router();

role.put('/putrole', putRole);

module.exports = role;
