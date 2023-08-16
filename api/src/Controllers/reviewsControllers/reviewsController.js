const { createReviewService } = require("../../Services/reviewsServices");

const createReviewController = async (req, res) => {
    const { rating, userId, perifericoId, componenteId,opinion } = req.body;

    try {
        const review = await createReviewService(rating, perifericoId, componenteId, userId,opinion);

        if (review) {
            res.status(200).json(review);
        } else {
            res.status(400).json({ error: "La reseña ya existe" });
        }
    } catch (error) {
        console.error("Error al crear una revisión", error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createReviewController };

