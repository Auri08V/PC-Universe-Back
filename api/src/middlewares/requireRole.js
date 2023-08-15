const jwt = require('jsonwebtoken');
const { Users } = require('../db');

const requireRole = (role) => async (req, res, next) => {

    const token = req.header('x-auth-token');

    if (!token) {
        res.status(401).json({ message: "Token missing" });
    }
    try {
        console.log(role)
        const decoded = jwt.verify(token, 'f00Zn203*m9m!r!o2phDcat%&5^yhH9zhW*');
        const user = await Users.findByPk(decoded.userId)
        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        if (user.roleId !== role) {
            return res.status(403).json({ message: 'Insufficient permissions' });
        }
        req.user = user;
        next();
    } catch (error) {
        res.status(500).json({ message: 'Token is not valid' });
    }
};

module.exports = requireRole;