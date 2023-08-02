const { getAllComponentes } = require('../controllers/componentesController');

const getComponentesHandler = async (req, res) => {
    const { name } = req.query;
    const results = name ? await getComponentesByName (name) : await getAllComponentes()
    res.status(200).json(results);
};

module.exports = {
    getComponentesHandler,

}