const { getDataByIDServices } = require("../../Services/productosServices");

const getDataByIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await getDataByIDServices(id);
    response
      ? res.status(200).json(response)
      : res.status(404).json({ message: "Componente no encontrado por id" });
  } catch (error) {
    res.status(500).json({ message: "Error al buscar por id" });
  }
};
module.exports = { getDataByIdController };
