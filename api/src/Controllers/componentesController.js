const { getDbAll } = require('./getDbComponentes');
const { getApiComponentes } = require('./getApiComponentes');

const getAllComponentes = async () => {
    try {
        const apiComponentes = await getApiComponentes();
        const dbComponentes = await getDbAll();

        const allComponentes = apiComponentes.concat(dbComponentes);
        return allComponentes;
    } catch (error) {
        console.error('Error al obtener todos los componentes:', error);
        console.error('Error en la ruta componentesController.js');
        return [];
    }
};
const getComponentesByName = async (name) => {
    try {
        const apiComponentes = await getApiComponentes(); 
        let dbComponentes = await getDbAll();

        if (name) {
            dbComponentes = dbComponentes.filter((componente) => componente.modelo.includes(name));
        }

        const allComponentes = apiComponentes.concat(dbComponentes);
        return allComponentes;
    } catch (error) {
        console.error('Error al obtener los componentes por nombre:', error);
        return [];
    }
};
module.exports = {
    getAllComponentes,
    getComponentesByName
};
