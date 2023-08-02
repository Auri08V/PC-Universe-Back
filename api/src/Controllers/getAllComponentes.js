const { loadDB } = require("../Services/loadDB");

const getAllComponentesController = async (req, res) => {
  try {
    const componentesData = await loadDB();
    res.status(200).json(componentesData);
  } catch (error) {
    console.error("Error al obtener los componentes",error)
    res.status(500).json({error:error.message || "Error al obtener los componentes"})
  }
};
module.exports={getAllComponentesController}
