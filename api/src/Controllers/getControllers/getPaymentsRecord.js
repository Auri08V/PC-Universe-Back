const { PaymentRecords } = require('../../db');

const getPaymentsRecord = async (req, res) => {

    try {

        const response = await PaymentRecords.findAll();

        if (!response.length === 0) return res.status(404).json({ error: "Records not found" })

        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ error: "Error in getPaymentsRecord.js" })
    }
};

module.exports = getPaymentsRecord;