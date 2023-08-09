const mercadopago = require('mercadopago');

const createOrder = async (req, res) => {
    const { componentes } = req.body;
    try {
        mercadopago.configure({
            access_token: "TEST-2880484440735966-080916-e48fb7bf4c9ee3c40cf62f317ad08397-1446661070",
        });
        let preference = {
            items: [],
        };
        componentes.forEach((componente) => {
            const { modelo, precio } = componente;
            const cantidad = componentes.filter(comp => comp.modelo === modelo).length;
            const item = {
                title: modelo,
                unit_price: precio * cantidad,
                quantity: cantidad
            };
            preference.items.push(item);
        });
        const response = await mercadopago.preferences.create(preference);
        const { id } = response.body;

        res.status(200).json({ preferenceId: id });
    } catch (error) {
        res.status(500).json({ error: 'Error creating the payment order' });
    }


};

module.exports = createOrder;