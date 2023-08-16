const { Users } = require('../../db');
const validator = require('validator');
const bcrypt = require('bcrypt');

const postUsers = async (req, res) => {
    const { name, last_name, email, password, city, postal_code, date_of_birth } = req.body;
    try {
        if (!name || !last_name || !email || !password || !city || !postal_code || !date_of_birth) {
            return res.status(404).json({ error: "missing data" })
        };
        const existingUser = await Users.findOne({ where: { email } });
        if (existingUser) {
            return res.status(409).json({ error: "the email already belongs to an existing user." })
        }
        // Validar email
        if (!validator.isEmail(email)) {
            return res.status(400).json({ error: "Invalid email" });
        }

        // Validar longitud de la contraseña
        if (!validator.isLength(password, { min: 8, max: 20 })) {
            return res.status(400).json({ error: "Password must be between 8 and 20 characters long" });
        }

        // Validar longitud del nombre
        if (!validator.isLength(name, { min: 4, max: 15 })) {
            return res.status(400).json({ error: "Name must be between 4 and 15 characters long" });
        }

        // Validar longitud del last_name
        if (!validator.isLength(last_name, { min: 1, max: 255 })) {
            return res.status(400).json({ error: "El last_name debe tener entre 1 y 255 caracteres" });
        }

        // Validar longitud de la city
        if (!validator.isLength(city, { min: 1, max: 255 })) {
            return res.status(400).json({ error: "La city debe tener entre 1 y 255 caracteres" });
        }

        // Validar longitud del postal_code
        if (!validator.isLength(postal_code, { min: 1, max: 10 })) {
            return res.status(400).json({ error: "El postal_code debe tener entre 1 y 10 caracteres" });
        }

        const hashedPass = await bcrypt.hash(password, 10);

        let rol = 2

        if (email === 'somospixis123@gmail.com') { rol = 1 }

        const response = await Users.create({
            name,
            last_name,
            email,
            password: hashedPass,
            city,
            postal_code,
            date_of_birth,
            roleId: rol
        });

        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
module.exports = postUsers;