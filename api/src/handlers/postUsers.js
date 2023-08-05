const { Users } = require('../db');
const validator = require('validator');

const postUsers = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        if (!name || !email || !password) {
            return res.status(404).json({ error: "missing data" })
        };
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
        await Users.create({ name, email, password });
        res.status(200).json({ message: "user created successfully!" })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
module.exports = postUsers;