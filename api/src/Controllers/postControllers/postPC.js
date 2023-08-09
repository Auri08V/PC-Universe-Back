const { PcFinal } = require('../../db');

const postPC = async (req, res) => {
    try {
        const { precio_total, componentes, perifericos } = req.body;

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

        return res.status(201).json({ success: true, message: "Pc creada exitosamente." });
    } catch (error) {
        console.error("Error al crear la Pc:", error);
        return res.status(500).json({ success: false, message: "Error al crear la Pc." });
    }
};
module.exports = postPC;