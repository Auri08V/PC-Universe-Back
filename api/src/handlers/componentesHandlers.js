const { getDataByNameController,getAllComponentes } = require("../Controllers/componentesController");

const getAllData = async (req, res) => {
  const { name } = req.query;
  const results = name ? await getDataByName(name) : await getAllComponentes();
  res.status(200).json(results);
};


const getDataByName = async (name) => {
  return await getDataByNameController(name);
};


const getDataByNameHandler = async (req, res) => {
  try {
    const { name } = req.query;
    const result = await getDataByNameController(name);

    res.status(200).json(result);
  } catch (error) {
    console.error("Ha ocurrido un error al buscar por nombre:", error);
    res.status(500).json({ error: "Error al buscar por nombre" });
  }
};


module.exports = {
  getDataByNameHandler,
  getAllData,
  getDataByName,
};
