const { PaymentRecords, Users } = require('../../db');

const getPaymentsRecord = async (req, res) => {
    try {
        const payments = await PaymentRecords.findAll();

        if (!payments.length === 0) return res.status(404).json({ error: "Records not found" });

        const userIds = [...new Set(payments.map(payment => payment.userId))];

        const users = await Users.findAll({
            where: {
                id: userIds,
            },
        });

        const userIdToName = users.reduce((map, user) => {
            if (user.name) {
                map[user.id] = user.name;
            }
            return map;
        }, {});

        const response = payments.map(payment => ({
            ...payment.dataValues,
            userId: userIdToName[payment.userId] || payment.userId,
        }));

        const amountTotal = payments.reduce((total, record) => total + record.amount, 0);

        res.status(200).json({ response, amountTotal });
    } catch (error) {
        res.status(500).json({ error: "Error in getPaymentsRecord.js" });
    }
};

module.exports = getPaymentsRecord;