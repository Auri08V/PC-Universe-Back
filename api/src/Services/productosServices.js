const { Componentes, Perifericos } = require("../db");
const { Op } = require("sequelize");
const DB = require("../../DB.json");
const saveComponentsToDatabase = async () => {
  try {
    for (const components of DB) {
      await Componentes.findOrCreate({
        where: { id: components.id }, 
        defaults: components, 
      });
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
// const savePerifericosToDatabase = async () => {
//   try {
//     for (const perifericos of DB) {
//       await Perifericos.findOrCreate({
//         where: { id: perifericos.id }, // Verificar si el producto ya existe por su ID
//         defaults: perifericos, // Insertar el producto si no existe
//       });
//     }
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// };

// const aux = async () => {
//   try {
//     const allPerifericos = await savePerifericosToDatabase();
//     const allComponents = await saveComponentsToDatabase();
//     const allTotal = allComponents.concat(allPerifericos);

//     // Hacer algo con allTotal
//     console.log(allTotal);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };

const getAllComponents = async (
  page,
  pageSize,
  categoria,
  price,
  name,
  sort
) => {
  try {
    const offset = (page - 1) * pageSize;
    const limit = pageSize;
    let whereCondition = {};

    if (categoria) {
      whereCondition.categoria = categoria;
    }

    if (name) {
      whereCondition.modelo = {
        [Op.iLike]: `%${name}%`,
      };
    }

    let order = [];

    if (price === "asc") {
      order.push(["price", "ASC"]);
    } else if (price === "desc") {
      order.push(["price", "DESC"]);
    }

    if (sort === "asc") {
      order.push(["name", "ASC"]);
    } else if (sort === "desc") {
      order.push(["name", "DESC"]);
    }

    const savedComponents = await Componentes.findAndCountAll({
      where: whereCondition,
      offset,
      limit,
      order,
    });

    const savedPerifericos = await Perifericos.findAndCountAll({
      where: whereCondition,
      offset,
      limit,
      order,
    });

    // Concatenar los resultados de componentes y periféricos
    const allProducts = savedPerifericos.rows.concat(savedComponents.rows);

    const totalItems = allProducts.count;
    const totalPages = Math.ceil(totalItems / pageSize);

    if (totalItems === 0) {
      await saveComponentsToDatabase ()
      return null;
    }

    return {
      products: allProducts,
      totalItems,
      totalPages,
      currentPage: page,
    };
  } catch (error) {
    throw error;
  }
};



module.exports = { getAllComponents };
