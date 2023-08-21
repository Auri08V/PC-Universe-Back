const { Comentarios, } = require("../../db");

const getAllComents = async (req, res) => {

    try {

        const response = await Comentarios.findAll();

        res.status(200).json({ comment: response });

    } catch (error) {

        res.status(400).json({ error: error.message });
    }
};
module.exports = getAllComents;