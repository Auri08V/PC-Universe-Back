const { Componentes, Perifericos } = require('../db');

const datosPaginados = async (page, pageSize) => {
  try {

    const offset = (page - 1) * pageSize;

    const [componentesResult, perifericosResult] = await Promise.all([
      Componentes.findAndCountAll({
        limit: pageSize,
        offset: offset,
      }),
      Perifericos.findAndCountAll({
        limit: pageSize,
        offset: offset,
      }),
    ]);

    
    const totalComponentesPages = Math.ceil(componentesResult.count / pageSize);
    const totalPerifericosPages = Math.ceil(perifericosResult.count / pageSize);

    return {
      currentPage: page,
      totalComponentesPages,
      totalPerifericosPages,
      componentes: componentesResult.rows,
      perifericos: perifericosResult.rows,
    };
  } catch (error) {
    console.error('Error al obtener los datos paginados (paginado):', error);
    throw error;
  }
};
module.exports = {datosPaginados}