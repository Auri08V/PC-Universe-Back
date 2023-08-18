const { Componentes, Perifericos, Users } = require('../../db');
const nodemailer = require('nodemailer');

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
        const oldPrice = item.precio;
        console.log(oldPrice);

        item.precio = newPrice;

        await item.save();

        const users = await Users.findAll();
        console.log(users);

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'perezpablo0903@gmail.com', // Cambiar por tu dirección de correo
                pass: 'qienhxbkqnniwjrk' // Cambiar por tu contraseña de correo
            }
        });

        for (const user of users) {
            const mailOptions = {
                from: 'perezpablo0903@gmail.com', // Cambiar por tu dirección de correo
                to: user.email,
                subject: `¡ PC universe tiene una Oferta Especial para ti! 🚀🔥`,
                html:
                    `
                <body style="font-family: Arial, sans-serif; text-align: center; background-color: #f3f3f3; padding: 20px;">

    <h1 style="color: #aa00ff;">¡Oferta Especial! 🚀🔥</h1>

    <p style="font-size: 18px; color: #333; margin-bottom: 30px;">
        <strong style="color: #aa00ff;">¡Atención a todos los entusiastas de la tecnología!</strong><br>
        No te pierdas esta increíble oportunidad para mejorar tu experiencia tecnológica al mejor precio. 😍
    </p>

    <h2 style="color: #aa00ff;">💥 la oferta de la semana es del  ${item.modelo} 💥</h2>

    <p style="font-size: 16px; color: #333; margin: 20px 0;">
        ¿Qué hace que el ${item.modelo} sea una elección asombroso?
    </p>
    <p style="font-size: 16px; color: #333; margin: 20px 0;"> TAN SOLO MIRALO!🤩🤩</p>
     
    <img src="${item.img}"  width="400" height="300" style="display: block; margin: 0 auto; max-width: 100%; height: auto;">

    <p style="font-size: 18px; color: #333; margin-top: 30px;">

        💰 <strong>¡Oferta Limitada!</strong> 💰<br>
        ¡Aprovecha esta oferta especial por tiempo limitado y adquiere el ${item.modelo} a un precio increíblemente reducido!
    </p>
    
    <p style="font-size: 16px; color: #333;">
        ⏳ ¡No pierdas tiempo! ¡Esta oferta expira pronto! ⏳
    </p>

    <p style="font-size: 18px; color: #aa00ff; margin-top: 30px;">
        ¡Actualiza tu configuración y lleva tu experiencia tecnológica al máximo con el TurboMax 5000!
    </p>

    <p style="font-size: 18px; color: #333; margin-top: 30px;">
        <strong>Compra ahora ➡️ <a href="http://127.0.0.1:5173/componentes/${item.id}" style="color: #aa00ff; text-decoration: none;">Enlace de Compra</a></strong>
    </p>

    <p style="font-size: 16px; color: #777; margin-top: 30px;">
         PC-universe Team
    </p>

</body>`
            };

            // Enviar el correo electrónico
            await transporter.sendMail(mailOptions);
        }

        res.status(200).json(item);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

module.exports = putPrice;