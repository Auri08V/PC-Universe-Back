const { Router } = require('express');
const createOrder = require('../Controllers/paymentControllers/payment');
const payment = Router();

payment.get("/payment", createOrder);

module.exports = payment;