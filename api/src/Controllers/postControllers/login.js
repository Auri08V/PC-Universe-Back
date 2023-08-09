const { Users } = require('../../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await Users.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ error: "user not found" });
        }
        const isPassValid = await bcrypt.compare(password, user.password);
        if (!isPassValid) {
            return res.status(401).json({ error: "incorrect password" });
        }
        const token = jwt.sign({ userId: user.id }, 'f00Zn203*m9m!r!o2phDcat%&5^yhH9zhW*', { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful.', token });
    } catch (error) {
        res.status(500).json({ error: error.message + "in login" })
    }
};
module.exports = login;