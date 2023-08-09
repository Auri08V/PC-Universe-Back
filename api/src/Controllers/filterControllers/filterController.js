const { Componentes, Perifericos } = require("../../db");

const Filters = async (categoria, price) => {
  try {
    let whereCondition = {};
    if (categoria) {
      whereCondition.categoria = categoria;
    }
    let order = [];

    if (price === "asc") {
      order.push(["price", "ASC"]);
    } else if (price === "desc") {
      order.push(["price", "DESC"]);
    }

    const savedComponents = await Componentes.findAndCountAll({
      where: whereCondition,
      order,
    });

    const savedPerifericos = await Perifericos.findAndCountAll({
      where: whereCondition,
      order,
    });

    const allProducts = savedPerifericos.rows.concat(savedComponents.rows);

    return {
      products: allProducts,
    };
  } catch (error) {
    console.error("Error en el filtrado");
    throw error; r
  }
};

const dataFilter = async (req, res) => {
  try {
    const categoria = req.query.categoria || null;
    const price = req.query.price || null;

 
    const result = await Filters(categoria, price);

    if (result.products.length === 0) {
      res.status(401).send("No hay resultados");
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    console.error("Error en el controlador:", error);
    res.status(500).send("Hubo un error en el servidor");
  }
};

module.exports = { dataFilter };
