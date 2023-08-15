const { Router } = require('express');
const createOrder = require('../../Controllers/paymentControllers/payment');
const payment = Router();

payment.post("/payment", createOrder);
payment.get('/success', (req, res) => { res.redirect("/http://127.0.0.1:5173/componentes") })
payment.get('/failure', (req, res) => { res.redirect("/http://127.0.0.1:5173/componentes") })
payment.get('/pending', (req, res) => { res.redirect("/http://127.0.0.1:5173/componentes") })
module.exports = payment;