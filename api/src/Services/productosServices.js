const { Componentes, Perifericos } = require("../db");

const getAllComponents = async (page = null, pageSize = null) => {
  try {
    const componentsQuery = {
      where: {} // Puedes agregar tus filtros aquí si los tienes
    };
    
    if (page !== null && pageSize !== null) {
      const offset = (page - 1) * pageSize;
      componentsQuery.offset = offset;
      componentsQuery.limit = pageSize;
    }
  
    const components = await Componentes.findAll(componentsQuery);
    const perifericos = await Perifericos.findAll(componentsQuery);
    const Total = components.concat(perifericos);
    
    return Promise.resolve({ data: Total });
  } catch (error) {
    throw error;
  }
};

module.exports = { getAllComponents };



