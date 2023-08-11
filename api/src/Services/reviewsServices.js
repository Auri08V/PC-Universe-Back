const { Perifericos, Componentes, PcFinal, Reviews, Users } = require("../db");

const createReviewService = async (rating, perifericoId, componenteId, pcFinalId, userId) => {
    try {
        const [review, created] = await Reviews.findOrCreate({
            where: { rating },
            defaults: {}
        });

        if (created) {
            const [user, componentes, perifericos, pcFinal] = await Promise.all([
                Users.findByPk(userId),
                Componentes.findByPk(componenteId),
                Perifericos.findByPk(perifericoId),
                PcFinal.findByPk(pcFinalId)
            ]);

            if (user) await review.setUser(user);
            if (componentes) await review.setComponentes(componentes);
            if (perifericos) await review.setPerifericos(perifericos);
            if (pcFinal) await review.setPcFinal(pcFinal);

            return review;
        } else {
            console.log("La reseña ya existe");
            return null;
        }
    } catch (error) {
        console.error("Error al crear una review", error);
        return null;
    }
};

module.exports = { createReviewService };
