const { createReviewService } = require("../../Services/reviewsServices");

const createReviewController = async (req, res) => {
    const { rating, pcFinalId, userId, perifericoId, componenteId, productoType } = req.body;

    try {
        let review;

        switch (productoType) {
            case "pcFinal":
                review = await createReviewService(rating, pcFinalId, userId);
                break;
            case "perifericos":
                review = await createReviewService(rating, perifericoId, userId);
                break;
            case "componentes":
                review = await createReviewService(rating, componenteId, userId);
                break;
            default:
                return res.status(400).json({ error: "Tipo de producto no válido" });
        }

        if (review) {
            res.status(200).json(review);
        } else {
    
            res.status(400).json({ error: "La reseña ya existe" });
        }
    } catch (error) {
        console.error("Error al crear una review", error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createReviewController };

