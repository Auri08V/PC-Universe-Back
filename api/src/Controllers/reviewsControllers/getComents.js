const { Comentarios, } = require("../../db");

const getComents = async (req, res) => {
    const { commentPerifericoId, commentComponenteId } = req.query;
    try {
        let response
        if (commentPerifericoId) {
            response = await Comentarios.findAll({
                where: {
                    comentariosPerifericosId: commentPerifericoId
                }
            })
        }
        if (commentComponenteId) {
            response = await Comentarios.findAll({
                where: {
                    comentariosComponentesId: commentComponenteId
                }
            })
        }
        res.status(200).json({ comment: response })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};
module.exports = getComents;