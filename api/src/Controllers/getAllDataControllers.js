const { getAllData } = require("./getData");

const getAllComponentes = async () => {
  try {
    const apiComponentes = await getAllData();
    return apiComponentes;
  } catch (error) {
    console.error("Error al obtener todos los componentes:", error);
    console.error("Error en la ruta componentesController.js");
    return [];
  }
};



module.exports = {
  getAllComponentes,
  
};