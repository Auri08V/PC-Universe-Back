// require("dotenv").config()
const { Sequelize } = require("sequelize")
// const fs = require("fs")
// const path = require ("path")

const {
    DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pc-universe`)

const { componentes, perifericos } = sequelize.models;

module.exports = { sequelize }