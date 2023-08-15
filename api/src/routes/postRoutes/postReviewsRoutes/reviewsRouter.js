const { Router } = require('express');
const { createReviewController } = require("../../../Controllers/reviewsControllers/reviewsController")

const reviewRouter = Router()

reviewRouter.post("/rating", createReviewController)

module.exports = reviewRouter