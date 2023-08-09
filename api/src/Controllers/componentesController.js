const { Op } = require("sequelize");
// const { getDbAll } = require("./getDbComponentes");
const {Componentes, Perifericos} = require ("../db")
const { getAllData } = require("../Services/getData");

const getAllComponentesT = async () => {
  try {
    const apiComponentes = await getAllData();
    return apiComponentes;
  } catch (error) {
    console.error("Error al obtener todos los componentes:", error);
    console.error("Error en la ruta componentesController.js");
    return [];
  }
};

module.exports = {
 
  getAllComponentesT,
};