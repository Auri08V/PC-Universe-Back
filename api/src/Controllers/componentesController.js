const { Op } = require("sequelize");
// const { getDbAll } = require("./getDbComponentes");
const { getApiComponentes } = require("./getApiComponentes");

const getAllComponentes = async () => {
  try {
    const apiComponentes = await getApiComponentes();
    const allComponentes = apiComponentes;
    return allComponentes;
  } catch (error) {
    console.error("Error al obtener todos los componentes:", error);
    console.error("Error en la ruta componentesController.js");
    return [];
  }
};

const getDataByNameController = async (name) => {
  const allData = await getApiComponentes();

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
  try {
    const { id } = req.params;
    const allData = await getApiComponentes();
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
// try {
//   const {id} = req.params;
//   const response = await getAllComponentes.findAll({
//     where : {
//       name:id
//     }
    
//   })
//   console.log(response);  
//   res.status(200).json(response)
// } catch (error) {
//   res.status(400).json({error:error.messaje})
// }

// };


module.exports = {
  getAllComponentes,
  getDataByNameController,
  getDataByIdController,
};
