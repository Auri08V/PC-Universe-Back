const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
    sequelize.define("Reviews", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        opinion: {
            type: DataTypes.STRING,
            allowNull: false
        }

    })
};