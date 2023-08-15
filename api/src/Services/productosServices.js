const { Componentes, Perifericos } = require("../db");

const getAllComponents = async (page, pageSize) => {
  try {
    const offset = (page - 1) * pageSize;
    const componentsQuery = {
      offset,
      limit: pageSize,
      where: {}
    };

    const components = await Componentes.findAll(componentsQuery);
    const perifericos = await Perifericos.findAll(componentsQuery);
    return components.concat(perifericos);
  } catch (error) {
    throw error;
  }
};

module.exports = { getAllComponents };
