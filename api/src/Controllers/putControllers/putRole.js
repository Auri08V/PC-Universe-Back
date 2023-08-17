const { Users } = require('../../db');

const putRole = async (req, res) => {

    const { id, newRole } = req.body

    try {
        const user = await Users.findByPk(id);

        if (!user) {
            res.status(404).json({ error: "User not found" });
        }
        user.roleId = newRole
        await user.save();

        res.status(200).json({ message: "User role update successfully" })

    } catch (error) {

        res.status(500).json({ error: error.message }, { error: "error in putRole.js" })
    }
};

module.exports = putRole;