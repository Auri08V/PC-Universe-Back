const { PcFinal } = require('../../db');

const getPC = async (req, res) => {
    try {
        const response = await PcFinal.findAll();
        if (response.length === 0) {
            return res.status(404).json({ error: "there are no existing computers" })
        }

        res.status(200).json(response);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
module.exports = getPC;