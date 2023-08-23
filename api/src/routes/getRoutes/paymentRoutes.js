const { Router } = require('express');
const createOrder = require('../../Controllers/paymentControllers/payment');
const payment = Router();

payment.post("/payment", createOrder);
payment.get('/success', (req, res) => { res.redirect("https://64e6720486de4d007837410b--glowing-cucurucho-f62754.netlify.app/") })
payment.get('/failure', (req, res) => { res.redirect("https://64e6720486de4d007837410b--glowing-cucurucho-f62754.netlify.app/") })
payment.get('/pending', (req, res) => { res.redirect("https://64e6720486de4d007837410b--glowing-cucurucho-f62754.netlify.app/") })
module.exports = payment;