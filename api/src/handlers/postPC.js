const { PcFinal, Componentes, Perifericos } = require('../db');

const postPC = async (req, res) => {
    try {
        // Extraer las propiedades necesarias del body
        const { precio_total, componentes, perifericos } = req.body;

        // Obtener los modelos de componentes y periféricos en base a los IDs recibidos
        const componentesNombresPromises = componentes.map((componente) =>
            Componentes.findByPk(componente.id, { attributes: ["modelo"] })
        );

        const perifericosNombresPromises = perifericos.map((periferico) =>
            Perifericos.findByPk(periferico.id, { attributes: ["modelo"] })
        );

        // Esperar a que todas las promesas de búsqueda de componentes y periféricos se resuelvan
        const componentesNombresResult = await Promise.all(componentesNombresPromises);
        const perifericosNombresResult = await Promise.all(perifericosNombresPromises);

        // Filtrar posibles resultados nulos de componentes y periféricos y obtener solo los modelos
        const componentesNombres = componentesNombresResult.filter((componente) => componente !== null).map((componente) => componente.modelo);
        const perifericosNombres = perifericosNombresResult.filter((periferico) => periferico !== null).map((periferico) => periferico.modelo);

        // Combinar los nombres de componentes y periféricos en una cadena de texto
        const componentesyperifericos = {
            componentes: componentesNombres,
            perifericos: perifericosNombres,
        };

        // Crear la PcFinal en la base de datos
        const pcFinal = await PcFinal.create({
            precio_total,
            especificaiones: JSON.stringify(componentesyperifericos),
        });

        // Respuesta exitosa
        return res.status(201).json({ success: true, message: "PcFinal creada exitosamente." });
    } catch (error) {
        console.error("Error al crear la PcFinal:", error);
        return res.status(500).json({ success: false, message: "Error al crear la PcFinal." });
    }
};
module.exports = postPC;