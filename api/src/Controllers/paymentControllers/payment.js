const mercadopago = require('mercadopago');

const createOrder = async (req, res) => {
    try {
        const { componentes } = req.body;
        console.log(componentes);

        if (!componentes || componentes.length === 0) {
            return res.status(404).json({ error: "La data no llegó correctamente" });
        }

        const items = componentes.map(item => ({
            title: item.title,
            unit_price: item.unit_price,
            quantity: item.quantity,
        }));

        let preference = {
            items,
            back_urls: {
                success: "http://localhost:5173/componentes",
                failure: "http://localhost:5173/componentes",
                pending: "http://localhost:5173/componentes"
            },
            auto_return: "approved",
        };

        const response = await mercadopago.preferences.create(preference);
        res.json({ id: response.body.id });
        console.log(response.body.id)

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Ha ocurrido un error en el servidor" });
    }
}

module.exports = createOrder;