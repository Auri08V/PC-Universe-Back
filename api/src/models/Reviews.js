const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
    sequelize.define("Reviews", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        rating: {
            type: DataTypes.ENUM("1", "2", "3", "4", "5")
        }
    })
}   