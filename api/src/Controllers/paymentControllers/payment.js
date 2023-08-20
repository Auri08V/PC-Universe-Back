const mercadopago = require('mercadopago');
const { PaymentRecords, Users } = require('../../db')

const createOrder = async (req, res) => {
    try {
        const { componentes, user } = req.body;
        console.log(componentes);
        console.log(user);

        if (!componentes || componentes.length === 0) {
            return res.status(404).json({ error: "La data no llegó correctamente" });
        }

        const amount = componentes.reduce((total, item) => total + item.unit_price, 0);

        const products = componentes.map(item => item.title);
        console.log(products);
        console.log(amount);

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

        const paymentRecord = await PaymentRecords.create({ amount, products });
        if (!paymentRecord) {
            res.status(404).json({ error: "error al crear registro de pago" })
        }

        console.log(paymentRecord);

        const findedUser = await Users.findOne({
            where: {
                email: user.email
            }
        });
        console.log(findedUser);
        if (findedUser) {
            await findedUser.setPaymentRecords(paymentRecord)
        }

        const response = await mercadopago.preferences.create(preference);
        res.json({ id: response.body.id });
        console.log(response.body.id)

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Ha ocurrido un error en payment.js" });
    }
}

module.exports = createOrder;