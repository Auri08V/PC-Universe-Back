const { PaymentRecords, Users } = require('../../db');

const getPaymentsRecord = async (req, res) => {

    try {
        const payments = await PaymentRecords.findAll();

        if (!payments.length === 0) return res.status(404).json({ error: "Records not found" });

        const userIds = payments.map(payment => payment.userId);
        
        const users = await Users.findAll({
            where: {
                id: userIds,
            },
        });

        const amountTotal = payments.reduce((total, record) => total + record.amount, 0);

        const responseData = payments.map(payment => {
            const user = users.find(user => user.id === payment.userId);

            if (user && user.name) {
                return {
                    ...payment,
                    userId: user.name,
                };
            } else {
                return payment;
            }
        });

        res.status(200).json({ response: responseData, amountTotal });
    } catch (error) {
        res.status(500).json({ error: "Error in getPaymentsRecord.js" })
    }
};

module.exports = getPaymentsRecord;