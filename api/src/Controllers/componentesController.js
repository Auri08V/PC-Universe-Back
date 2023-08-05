const { Op } = require("sequelize");
// const { getDbAll } = require("./getDbComponentes");
const {Componentes} = require ("../db")
const { getAllData } = require("./getApiComponentes");


const getAllComponentes = async (page = 1, itemsPerPage = 8) => {
  try {
    const apiComponentes = await getAllData();
    
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedComponentes = apiComponentes.slice(startIndex, endIndex);

    return paginatedComponentes;
  } catch (error) {
    console.error("Error al obtener los componentes:", error);
    console.error("Error en la ruta componentesController.js");
    return [];
  }
};

const getDataByNameController = async (name) => {
  const allData = await getAllData();

  if (name) {
    const lowerCaseName = name.toLowerCase();
    const filteredData = allData.filter((data) =>
      data.modelo.toLowerCase().includes(lowerCaseName)
    );
    const filter8 = filteredData.slice(0,7)
    return filter8

  } else {
    return allData;
  }
};

const getDataByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const allData = await getAllData();
    const filteredData = allData.filter((data) => data.id === id);
    if (filteredData.length) {
      res.status(200).json(filteredData);
    } else {
      res.sendStatus(404).send("No se encontro ningun componente o perifericos con ese ID");
    }
  } catch (error) {
    console.error("Error al buscar componentes o perifericos por ID", error);
    res.status(500).send("Error al buscar por ID");
  }
}

module.exports = {
  getAllComponentes,
  getDataByNameController,
  getDataByIdController,
};