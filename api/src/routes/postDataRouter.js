
// const { getAllData, getDataByName } = require('../handlers/componentesHandlers');
// const { getAllComponentes, getAllComponentesT } = require('../Controllers/componentesController');
// const { filterController } = require('../middlewares/filteredProducts');
const { Router } = require('express');

const postUsers = require('../Controllers/postControllers/postUsers');
const postPC = require('../Controllers/postControllers/postPC');





const postDataRouter = Router();

postDataRouter.post('/users', postUsers);

postDataRouter.post('/pc', postPC);


module.exports = postDataRouter;
// componentesRouter.get("/paginado", async (req, res) => {
//     const page = parseInt(req.query.page) || 1;
//     const itemsPerPage = 8;

//     try {
//         const allComponentes = await getAllComponentes(page, itemsPerPage);


//         const nextPage = page + 1;


//         const prevPage = Math.max(page - 1, 1);

//         res.status(200).json({
//             currentPage: page,
//             nextPage: nextPage,
//             prevPage: prevPage,
//             data: allComponentes,
//         });
//     } catch (error) {
//         return res.status(500).json({ error: 'Error al obtener componentes' });
//     }
// });

// componentesRouter.get('/name', async (req, res) => {
//     const { name } = req.query;
//     const results = await getDataByName(name);
//     res.status(200).json(results);
// });


// componentesRouter.get('/filter', filterController);
// componentesRouter.get("/:id", async (req, res) => {
//     const id = req.params.id
//     const allComponentes = await getAllComponentesT()
//     try {
//         if (id) {
//             const componenteId = allComponentes.find(componente => componente.id == (id))
//             componenteId ? res.status(200).send(componenteId) : res.status(404).json("Componente not found");
//         }
//     } catch (error) {
//         return res.status(404).send(error.message)
//     }
// });