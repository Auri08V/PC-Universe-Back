const { Router } = require('express');
const createOrder = require('../Controllers/paymentControllers/payment');
const payment = Router();

payment.post("/payment", createOrder);
payment.get("/payment/success", (req, res) => { res.redirect("/") });
payment.get("/payment/failure", (req, res) => { res.send("Payment failure").redirect("/carrito") })

module.exports = payment;