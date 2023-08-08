// const {paginado} = require ("../middlewares/paginado")

// const dataPaginado = async(req,res)=>{
//     try {
//         const {page ,pageSize} = req.query

//         const data = await paginado(parseInt(page),parseInt(pageSize))
//         res.status(200).json(data)
//     } catch (error) {
//         console.error("Error al obtener datos paginados")
//         res.status(500).json({error:"Error al obtener los datos paginados"})
//     }
// }

// module.exports = {
//     dataPaginado
// } 