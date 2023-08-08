const { PcFinal, Componentes, Perifericos } = require('../../db');

const postPC = async (req, res) => {
    try {
       
        const { nombre, precio_total, componentes, perifericos } = req.body;
 
        const componentesNombres = await Componentes.findAll({
            where: { id: componentes },
            attributes: ["modelo"],
        });

        const perifericosNombres = await Perifericos.findAll({
            where: { id: perifericos },
            attributes: ["modelo"],
        });

        const componentesyperifericos = {
            componentes: componentesNombres.map((componente) => componente.modelo),
            perifericos: perifericosNombres.map((periferico) => periferico.modelo),
        };

        const pcFinal = await PcFinal.create({
            nombre,
            precio_total,
            especificaiones: JSON.stringify(componentesyperifericos),
        });

        // Respuesta exitosa
        return res.status(201).json({ success: true, message: "Pc creada exitosamente." });
    } catch (error) {
        console.error("Error al crear la Pc:", error);
        return res.status(500).json({ success: false, message: "Error al crear la Pc." });
    }
};
module.exports = postPC;