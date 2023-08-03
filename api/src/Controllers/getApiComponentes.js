const DB = require("../../DB.json");

const getApiComponentes = async () => {
  const infoGabinetes = DB.gabinetes.map((gabinete) => {
    return {
      id: gabinete.id,
      modelo: gabinete.modelo,
      especificaciones: gabinete.especificaciones,
      precio: gabinete.precio,
      img: gabinete.img,
      categoria: gabinete.categoria,
    };
  });
  const infoMemoriasRam = DB.memorias_ram.map((memoriaRam) => {
    return {
      id: memoriaRam.id,
      modelo: memoriaRam.modelo,
      especificaciones: memoriaRam.especificaciones,
      precio: memoriaRam.precio,
      img: memoriaRam.img,
      categoria: memoriaRam.categoria,
    };
  });
  const infoPlacasGraficas = DB.placas_graficas.map((placaGrafica) => {
    return {
      id: placaGrafica.id,
      modelo: placaGrafica.modelo,
      especificaciones: placaGrafica.especificaciones,
      precio: placaGrafica.precio,
      img: placaGrafica.img,
      categoria: placaGrafica.categoria,
    };
  });
  const infoMonitores = DB.monitores.map((monitor) => {
    return {
      id: monitor.id,
      modelo: monitor.modelo,
      especificaciones: monitor.especificaciones,
      precio: monitor.precio,
      img: monitor.img,
      categoria: monitor.categoria,
    };
  });
  const infoDiscos = DB.discos.map((disco) => {
    return {
      id: disco.id,
      modelo: disco.modelo,
      especificaciones: disco.especificaciones,
      precio: disco.precio,
      img: disco.img,
      categoria: disco.categoria,
    };
  });
  const infoFuentesDePoder = DB.fuentes_de_poder.map((fuenteDePoder) => {
    return {
      modelo: fuenteDePoder.modelo,
      especificaciones: fuenteDePoder.especificaciones,
      precio: fuenteDePoder.precio,
      img: fuenteDePoder.img,
      categoria: fuenteDePoder.categoria,
    };
  });
  const infoProcesadores = DB.procesadores.map((procesador) => {
    return {
      modelo: procesador.modelo,
      especificaciones: procesador.especificaciones,
      precio: procesador.precio,
      img: procesador.img,
      categoria: procesador.categoria,
    };
  });
  const infoPlacasBase = DB.placas_madres.map((placaMadre) => {
    return {
      modelo: placaMadre.modelo,
      especificaciones: placaMadre.especificaciones,
      precio: placaMadre.precio,
      img: placaMadre.img,
      categoria: placaMadre.categoria,
    };
  });
  const infoRefrigerantes = DB.refrigerantes.map((refrigerante) => {
    return {
      modelo: refrigerante.modelo,
      especificaciones: refrigerante.especificaciones,
      precio: refrigerante.precio,
      img: refrigerante.img,
      categoria: refrigerante.categoria,
    };
  });
  const infoPerifericos = DB.perifericos.map((periferico) => {
    return {
      tipo: periferico.tipo,
      modelo: periferico.modelo,
      especificaciones: periferico.especificaciones,
      precio: periferico.precio,
      img: periferico.img,
      categoria: periferico.categoria,
    };
  });
  const allComponentes = [
    ...infoGabinetes,
    ...infoMemoriasRam,
    ...infoPlacasGraficas,
    ...infoMonitores,
    ...infoDiscos,
    ...infoFuentesDePoder,
    ...infoProcesadores,
    ...infoPlacasBase,
    ...infoRefrigerantes,
    ...infoPerifericos,
  ];

  return allComponentes;
};

module.exports = {
  getApiComponentes,
};
