const { Op } = require("sequelize");
// const { getDbAll } = require("./getDbComponentes");
const {Componentes, Perifericos} = require ("../db")
const { getAllData } = require("../Services/getData");

const getAllComponentesT = async () => {
  try {
    const apiComponentes = await getAllData();
    return apiComponentes;
  } catch (error) {
    console.error("Error al obtener todos los componentes:", error);
    console.error("Error en la ruta componentesController.js");
    return [];
  }
};

// const getAllComponentes = async (page = 1, itemsPerPage = 8) => {
//   try {
//     const apiComponentes = await getAllData();
    
//     const startIndex = (page - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     const paginatedComponentes = apiComponentes.slice(startIndex, endIndex);

//     return paginatedComponentes;
//   } catch (error) {
//     console.error("Error al obtener los componentes:", error);
//     console.error("Error en la ruta componentesController.js");
//     return [];
//   }
// };

// const getDataByNameController = async (name) => {
//   const allData = await getAllData();

//   if (name) {
//     const lowerCaseName = name.toLowerCase();
//     const filteredData = allData.filter((data) =>
//       data.modelo.toLowerCase().includes(lowerCaseName)
//     );
//     const filter8 = filteredData.slice(0,7)
//     return filter8

//   } else {
//     return allData;
//   }
// };

// const postComponentes = async (modelo, especificaciones, img, precio, categoria, perifericos, createInDb = true) => {
//   const dbResponse = await Componentes.findAll({
//     where: {
//         name: {
//           [Op.iLike]: `%${modelo}%`,
//         },
//     },
//   });

//     if (dbResponse.length) {
//         throw new Error("Ya existe un componente con ese nombre");
//     }

//     const newComponente = await Componentes.create({
//         modelo,
//         especificaciones,
//         img,
//         precio,
//         categoria,
//         createInDb 
//     });

//     if (perifericos && perifericos.length > 0) {

//         const perifericosFound = await Perifericos.findAll({
//             where: {
//                 id: perifericos,
//             },
//         });

//         if (perifericosFound.length !== perifericos.length) {
//             throw new Error("Alguno de los perifericos seleccionados no existe");
//         }

//         await newComponente.setPerifericos(perifericosFound);
//     }

//     return newComponente;
// };
module.exports = {
 
  getAllComponentesT,
};