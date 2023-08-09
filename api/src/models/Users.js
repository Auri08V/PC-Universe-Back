const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Users', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            unique: true,
            autoIncrement: true,
            allowNull: false,
        },
        nick_name:{
            type: DataTypes.STRING(15),
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },

        password: {
            type: DataTypes.TEXT,
            allowNull: false,
             },
        city:{
            type: DataTypes.STRING,
            allowNull: false
        },
        postal_code:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        date_of_birth:{
            type : DataTypes.DATEONLY,
            allowNull:false,
        }
    });
};