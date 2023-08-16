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


const deleteProductService = async (id) => {
  try {
    const componente = await Componentes.findByPk(id);
    const periferico = await Perifericos.findByPk(id);

    if (componente) {
      await componente.update({ ocultar: true });
    }

    if (periferico) {
      await periferico.update({ ocultar: true });
    }

    return {
      componente,
      periferico,
    };
  } catch (error) {
    console.log("Error al borrar un producto (services)", error);
    throw error;
  }
};

const reverDeleteProductService = async (id) => {
  try {
    const componente = await Componentes.findByPk(id);
    const periferico = await Perifericos.findByPk(id);

    if (componente) {
      await componente.update({ ocultar: false });
    }

    if (periferico) {
      await periferico.update({ ocultar: false });
    }

    return {
      componente,
      periferico,
    };
  } catch (error) {
    console.log("Error al actualizar un producto (services)", error);
    throw error;
  }
};






module.exports = { getAllComponents,reverDeleteProductService,deleteProductService};
