const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('PaymentRecords', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            unique: true,
            autoIncrement: true,
            allowNull: false,
        },
        amount: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        products: {
            type: DataTypes.JSON,
            allowNull: false
        }
    });
};