const { Componentes, Perifericos } = require("../../db");
const getById = async (req, res) => {
    const { id } = req.params;
    try {
        let response
        const componente = await Componentes.findByPk(id);
        const periferico = await Perifericos.findByPk(id);
        if (!componente) { response = periferico }
        if (!periferico) { response = componente }

        response
            ? res.status(200).json(response)
            : res.status(404).json({ message: "Componente no encontrado por id" });
    } catch (error) {
        res.status(500).json({ message: "Error al buscar por id" });
    }
};

module.exports = getById;