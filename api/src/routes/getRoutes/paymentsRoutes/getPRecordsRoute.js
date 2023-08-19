const { Router } = require('express');
const getPaymentsRecord = require('../../../Controllers/getControllers/getPaymentsRecord');

const getpayment = Router();

getpayment.get('/getpayments', getPaymentsRecord);

module.exports = getpayment;