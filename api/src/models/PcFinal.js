const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("pcFinal", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      especificaiones: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      precio_total: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
})}