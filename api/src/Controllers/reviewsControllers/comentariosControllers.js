const { createComenentariosService } = require("../../Services/comentariosServices")

const createComentarioController = async (req, res) => {
    const { comentario, userId, perifericoId, componenteId } = req.body;

    try {
        const comentarios = await createComenentariosService(comentario, perifericoId, componenteId, userId);

        if (comentarios) {
            res.status(200).json(comentarios);
        } else {
            res.status(400).json({ error: "La reseña ya existe" });
        }
        console.log(comentarios)
    } catch (error) {
        console.error("Error al crear una revisión", error);
        res.status(500).json({ error: error.message });
    }
};


module.exports = { createComentarioController, };
