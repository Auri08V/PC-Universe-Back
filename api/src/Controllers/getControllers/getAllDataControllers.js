const {getAllComponents} = require("../../Services/productosServices");

const getAllDataControllers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 8;
    const categoria = req.query.categoria || null;
    const price = req.query.price || null;
    const name = req.query.name || "";
    const sort = req.query.sort || null;

    const result = await getAllComponents(
      page,
      pageSize,
      categoria,
      price,
      name,
      sort
    );
    if (!result) {
      let message = "No hay resultado";
      if (categoria || price || sort) {
        message += "para los filtros especificados";
      }
      res.status(204).json({
        message,
      });
      return;
    }
    const { products, totalItems, totalPages, currentPage } = result;

    if (page > totalPages) {
      res.status(204).json({
        message: `La pagina ${page} no existe`,
      });
      return;
    }

    const nextPage = currentPage < totalPages ? currentPage + 1 : null;
    const previousPage = currentPage > 1 ? currentPage - 1 : null;

    res.status(200).json({
      products,
      info: {
        totalItems,
        totalPages,
        currentPage,
        nextPage,
        previousPage,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllDataControllers,
};
