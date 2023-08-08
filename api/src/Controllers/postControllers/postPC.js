const { PcFinal, Componentes, Perifericos } = require('../../db');

const postPC = async (req, res) => {
    try {
        const { precio_total, componentes } = req.body;

        const componenteIds = [];
        const modelos = [];
        const imgs = [];
        const precios = [];

        for (const componente of componentes) {
            componenteIds.push(componente.id);
            modelos.push(componente.modelo);
            imgs.push(componente.img);
            precios.push(componente.precio);
        }

        const pcFinal = await PcFinal.create({
            precio_total,
            componenteId: componenteIds,
            modelo: modelos,
            img: imgs,
            precio: precios,
        });

        return res.status(201).json({ success: true, message: "PcFinal creada exitosamente." });
    } catch (error) {
        console.error("Error al crear la PcFinal:", error);
        return res.status(500).json({ success: false, message: "Error al crear la PcFinal." });
    }
};
module.exports = postPC;