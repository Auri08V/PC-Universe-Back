const { PcFinal } = require('../../db');

const deletePc = async (req, res) => {
    const { id } = req.params.id;
    try {
        const pc = await PcFinal.findByPk(id);
        if (!pc) {
            return res.status(404).json({ error: "Build not found" });
        }
        await pc.destroy();

        res.status(200).json({ message: "Build delete successfully" })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

module.exports = deletePc;