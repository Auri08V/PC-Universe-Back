const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("pcFinal", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    componenteId: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: false,
    },
    modelo: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    img: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: false,
    },
    precio: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: false,
    },
    precio_total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};