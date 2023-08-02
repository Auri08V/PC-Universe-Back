
const { Componentes } = require("../db");
const db = require("../../DB.json");
const loadDB = async () => {
  try {
    const dbComponentes = await Componentes.findAll();
    if (dbComponentes.length === 0) {
      const dataApi = db.map((componente) => ({
        id: componente.id,
        modelo: componente.modelo,
        especificaciones: componente.especificaciones,
        img: componente.img,
        precio: componente.precio,
      }));

      await Componentes.bulkCreate(dataApi);

      console.log(
        "Componentes y especificaciones agregados a la base de datos correctamente."
      );
    } else {
      console.log(
        "La base de datos ya contiene datos. No se agregó información nueva."
      );
    }
  } catch (error) {
    console.error(
      "Error al agregar componentes y especificaciones a la base de datos(loadDB):",
      error
    );
  }
};

module.exports = loadDB;
