const { Router } = require('express');
const createOrder = require('../Controllers/paymentControllers/payment');
const payment = Router();

payment.post("/payment", createOrder);

module.exports = payment;