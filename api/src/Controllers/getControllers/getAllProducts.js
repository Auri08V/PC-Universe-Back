const { Componentes, Perifericos } = require('../../db');

const getAllProducts = async (req, res) => {
    try {
        const componente = await Componentes.findAll();
        const periferico = await Perifericos.findAll();

        const response = componente.concat(periferico);
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

module.exports = getAllProducts;