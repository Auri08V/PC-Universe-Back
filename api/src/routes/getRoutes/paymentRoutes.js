const { Router } = require('express');
const createOrder = require('../../Controllers/paymentControllers/payment');
const payment = Router();

payment.post("/payment", createOrder);
payment.get('/success', (req, res) => { res.redirect("https://pc-universe.vercel.app/") })
payment.get('/failure', (req, res) => { res.redirect("https://pc-universe.vercel.app/") })
payment.get('/pending', (req, res) => { res.redirect("https://pc-universe.vercel.app/") })
module.exports = payment;