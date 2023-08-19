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


const createdComponentService = async (modelo, especificaciones, precio, stock, img, categoria, cantidad,) => {
  try {

    const minIdValue = 81;
    const maxIdValue = 1000000
    const randomId = Math.floor(Math.random() * (maxIdValue - minIdValue + 1)) + minIdValue;
    const componente = await Componentes.create({
      id: randomId,
      modelo,
      especificaciones,
      precio,
      stock,
      img,
      categoria,
      cantidad,
    });
    return { componente };
  } catch (error) {
    console.error("Error al crear el componente(services)", error);
    throw error;
  }
};

const createdPerifericosService = async (modelo, especificaciones, precio, stock, img, categoria, cantidad, tipo) => {
  try {
    const minIdValue = 81;
    const maxIdValue = 1000000;
    const randomId = Math.floor(Math.random() * (maxIdValue - minIdValue + 1)) + minIdValue;
    const periferico = await Perifericos.create({
      id: randomId,
      modelo,
      especificaciones,
      precio,
      stock,
      img,
      categoria,
      cantidad,
      tipo,
    })
    return { periferico };

  } catch (error) {
    console.error("Error al crear el periferico(services)", error);
    throw error;
  }

}


module.exports = { getAllComponents, reverDeleteProductService, deleteProductService, createdComponentService, createdPerifericosService };
