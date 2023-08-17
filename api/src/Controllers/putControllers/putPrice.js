const { Componentes, Perifericos } = require('../../db');

const putPrice = async (req, res) => {
    const { id, newPrice } = req.body;
    try {
        let item = await Componentes.findByPk(id);

        if (!item) {
            item = await Perifericos.findByPk(id);
            if (!item) {
                return res.status(404).json({ message: 'Product not found' });
            }
        }

        item.precio = newPrice;

        await item.save();

        res.status(200).json(item);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

module.exports = putPrice;