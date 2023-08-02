const {Router} = require ("express");
const componentesRouter = require('./componentesRouter');

const DB = require('../../DB.json')

const router = Router ()


// router.use("/componentes", (req, res)=> {
//     res.json(DB);
// });

router.use("/componentes", componentesRouter);


module.exports = router;