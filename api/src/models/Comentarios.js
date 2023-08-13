const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
    sequelize.define("Comentarios", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },

        comentarios: {
            type: DataTypes.STRING(300),
            allowNull: true
        },
    })
}   