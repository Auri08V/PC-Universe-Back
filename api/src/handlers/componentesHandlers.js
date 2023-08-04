// const {
//   getDataByNameController,getAllComponentes
// } = require("../Controllers/componentesController");


// const getAllData = async (req, res) => {
//  try {
//    const allData = await getAllComponentes()
//   res.status(200).json(allData)

//  } catch (error) {
//   error.log("Error al obtener la informacion desde el handler:",error);
//   res.status(500).json({error:error.menssage || "Error al obtener la informacion del json"})
//  }
 
// };




// const getDataByNameHandler = async (req, res) => {
//   try {
//     const { name } = req.query;
//     const result = await getDataByNameController(name);

//     res.status(200).json(result);
//   } catch (error) {
//     console.error("Ha ocurrido un error al buscar por nombre:", error);
//     res.status(500).json({ error: "Error al buscar por nombre" });
//   }
// };


// module.exports = {
//   getDataByNameHandler,
//   getAllData
// };

const {
  getDataByNameController,getAllComponentes
} = require("../Controllers/componentesController");


// const getAllData = async (req, res) => {
//  try {
//    const allData = await getAllComponentes()
//   res.status(200).json(allData)
//   console.log(allData);
//  } catch (error) {
//   error.log("Error al obtener la informacion desde el handler:",error);
//   res.status(500).json({error:error.menssage || "Error al obtener la informacion del json"})
//  }
 
// };

const getAllData = async (req, res) => {
  const { name } = req.query;
  const results = name ? await getDataByNameController(name) : await getAllComponentes()
  res.status(200).json(results);
};





const getDataByNameHandler = async (req, res) => {
  try {
    const { name } = req.query;
    const result = await getDataByNameController(name);

    res.status(200).json(result);
  } catch (error) {
    console.error("Ha ocurrido un error al buscar por nombre:", error);
    res.status(500).json({ error: "Error al buscar por nombre" });
  }
};


module.exports = {
  getDataByNameHandler,
  getAllData
};
