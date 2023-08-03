const { Op } = require("sequelize");
const {Componentes} = require ("../db")
const { getAllData } = require("./getApiComponentes");

const getAllComponentes = async () => {
  try {
    const apiComponentes = await getAllData();
    const allComponentes = apiComponentes;
    return allComponentes;
  } catch (error) {
    console.error("Error al obtener todos los componentes:", error);
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

    if (filteredData.length === 0) {
      const dataLike = allData.filter((data) =>
        data.modelo.toLowerCase().includes(lowerCaseName)
      );
      return dataLike.length ? dataLike : null;
    } else {
      return filteredData;
    }
  } else {
    return allData;
  }
};

const getDataByIdController = async (req, res) => {
    const { id } = req.params;
    try {
      const response = await Componentes.findOne({
        where:
          { id: id }
      });
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };




module.exports = {
  getAllComponentes,
  getDataByNameController,
  getDataByIdController,
};
