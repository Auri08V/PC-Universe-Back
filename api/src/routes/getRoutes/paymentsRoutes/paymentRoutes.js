const { Router } = require('express');
const createOrder = require('../../../Controllers/paymentControllers/payment');
const payment = Router();

payment.post("/payment", createOrder);
payment.get('/success', (req, res) => { res.redirect("/https://64e613d3d133fb17d14c9c38--lucky-crumble-22fa62.netlify.app/") })
payment.get('/failure', (req, res) => { res.redirect("/https://64e613d3d133fb17d14c9c38--lucky-crumble-22fa62.netlify.app/") })
payment.get('/pending', (req, res) => { res.redirect("/https://64e613d3d133fb17d14c9c38--lucky-crumble-22fa62.netlify.app/") })
module.exports = payment;