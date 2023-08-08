const { getAllData } = require("./getApiComponentes");


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
  
  module.exports = {getDataByIdController}