const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("componentes", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,

      autoIncrement: true,

    },
    modelo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    especificaciones: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    precio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    img: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ocultar:{
      type:DataTypes.BOOLEAN,
      defaultValue: false,
    }
  });

};
