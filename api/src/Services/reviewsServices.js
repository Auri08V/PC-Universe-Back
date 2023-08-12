const { Perifericos, Componentes, Reviews, Users } = require("../db");

const createReviewService = async (rating, perifericoId, componenteId, userId) => {
    try {
        const componentes = await Componentes.findByPk(componenteId)
        const perifericos = await Perifericos.findByPk(perifericoId)
        const users = await Users.findByPk(userId)

        const review = await Reviews.create({
            rating,

        })

        await review.setUser(users)
        await review.setComponente(componentes)
        await review.setPeriferico(perifericos)
        return review
    } catch (error) {
        console.error("Error en servicesReview", error)
    }
}

module.exports = { createReviewService };

