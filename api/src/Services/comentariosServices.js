const { Perifericos, Componentes, Comentarios, Users } = require("../db");

const createComenentariosService = async (comentarios, perifericosId, componentesId, userId) => {
    try {
        const componentes = await Componentes.findByPk(componentesId)
        const perifericos = await Perifericos.findByPk(perifericosId)
        const users = await Users.findByPk(userId)

        const comentario = await Comentarios.create({
            comentarios
        })

        await comentario.setUser(users)
        await comentario.setComponente(componentes)
        await comentario.setPeriferico(perifericos)

        return comentario

    } catch (error) {
        console.error("Error en servicesComentarios", error)
    }
}
module.exports = { createComenentariosService }