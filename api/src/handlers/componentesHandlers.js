const { getDataByNameController,getAllComponentes, getAllComponentesT } = require("../Controllers/componentesController");

// const getAllData = async (req, res) => {
//   const { name } = req.query;
//   const results = name ? await getDataByName(name) : await getAllComponentes();
//   res.status(200).json(results);
// };
const getAllData = async (req, res) => {

  const results =  await getAllComponentesT();
  res.status(200).json(results);
};


const getDataByName = async (name) => {
  return await getDataByNameController(name);
};

const getAllComponentesP = async(req, res) => {
  const page = parseInt(req.query.page) || 1; 
    const itemsPerPage = 8; 
    
    try {
        const allComponentes = await getAllComponentes(page, itemsPerPage);

        
        const nextPage = page + 1;
        
        
        const prevPage = Math.max(page - 1, 1);
        
        res.status(200).json({
            currentPage: page,
            nextPage: nextPage,
            prevPage: prevPage,
            data: allComponentes,
        });
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener componentes' });
    }
}


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


module.exports = {
  // getDataByNameHandler,
  // getAllData,
  getDataByName,
  getAllComponentesP,
  getAllData,
};
