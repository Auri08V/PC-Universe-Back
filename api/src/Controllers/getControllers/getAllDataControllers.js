const { getAllComponents } = require("../../Services/productosServices");

const getAllDataControllers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 8;
    const filters = req.query.filters || null;

    const products = await getAllComponents(page, pageSize, filters);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los productos" });
  }
};

module.exports = {
  getAllDataControllers,
};