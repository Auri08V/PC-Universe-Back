const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
    sequelize.define("Roles", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    })
};