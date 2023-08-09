const Router = require ("express")
const {allData} = require ("../Controllers/getControllers/getAllDataControllers")
const allDataRouter = Router()

allDataRouter.get("/",allData)

module.exports = allDataRouter