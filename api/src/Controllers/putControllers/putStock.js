const { Componentes, Perifericos } = require('../../db');

const putStock = async (req, res) => {
    const { id, newStock } = req.body;
    try {
        let item = await Componentes.findByPk(id);

        if (!item) {
            item = await Perifericos.findByPk(id);
            if (!item) {
                return res.status(404).json({ message: 'Item no encontrado' });
            }
        }

        item.stock = newStock;

        await item.save();

        res.status(200).json(item);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

module.exports = putStock;