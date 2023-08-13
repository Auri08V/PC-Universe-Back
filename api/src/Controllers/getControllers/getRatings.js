const { Reviews } = require('../../db');

const calculateWeightedAverageRating = (reviews) => {
    const totalRatings = reviews.reduce((total, review) => total + parseInt(review.rating || 0, 10), 0);
    const weightedSum = reviews.reduce((sum, review) => sum + parseInt(review.rating) * parseInt(review.rating || 0, 10), 0);
    const averageRating = totalRatings > 0 ? weightedSum / totalRatings : 0;
    console.log(totalRatings);
    return averageRating.toFixed(2);
};
const getRatings = async (req, res) => {
    const { perifericoId, componenteId } = req.query;
    try {
        let response;
        if (perifericoId) {
            response = await Reviews.findAll({
                where: {
                    reviewsPerifericosId: perifericoId,
                },
            });
        }
        if (componenteId) {
            response = await Reviews.findAll({
                where: {
                    reviewsComponentesId: componenteId,
                },
            });
        }

        // Calcular el rating promedio ponderado y agregarlo a la respuesta
        const weightedAverageRating = calculateWeightedAverageRating(response);
        const weightedAverageRatingN = Number(weightedAverageRating);
        const responseData = {
            ratings: response,
            weightedAverageRatingN,
        };

        res.status(200).json(responseData);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = getRatings;