const { Users } = require('../../db');

const getUsers = async (req, res) => {
    try {
        const response = await Users.findAll();

        res.status(200).json(response);

    } catch (error) {

        res.status(4000).json({ error: error.message })

    }
};

module.exports = getUsers;