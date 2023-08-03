const DB = require("../../DB.json");

const getApiComponentes = async () => {
  const infoComponentes = DB.componentes.map((elemento) => {
    return {
      id: elemento.id,
      modelo: elemento.modelo,
      especificaciones: elemento.especificaciones,
      precio: elemento.precio,
      img: elemento.img,
      categoria: elemento.categoria,
    };
  });
  return infoComponentes;
};
const getApiPerifericos = async () => {
  const perifericos = DB.perifericos.map((el) => {
    return {
      id: el.id,
      tipo: el.tipo,
      modelo: el.modelo,
      especificaciones: el.especificaciones,
      precio: el.precio,
      stock: el.stock,
      categoria: el.categoria,
      img: el.img,
    };
  });
  return perifericos;
};

const getAllData = async () => {
  const dataComponentes = await getApiComponentes();
  const dataPerifericos = await getApiPerifericos();
  const dataTotal = dataComponentes.concat(dataPerifericos);
  return dataTotal;
};

module.exports = {
  getAllData,
};
