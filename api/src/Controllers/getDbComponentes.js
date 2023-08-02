const { Componentes, Perifericos } = require('../db');
const getDbPerifericos = async () => {
    try {
        const dbPerifericos = await Perifericos.bulkCreate({
            raw: true,
            nest: true,
        });

        return dbPerifericos;
    } catch (error) {
        console.error('Error al obtener componentes de la base de datos:', error);
        return [];
    }
};

const getDbComponentes = async () => {
    try {
        const dbComponentes = await Componentes.bulkCreate({
            raw: true,
            nest: true,
        });

        return dbComponentes;
    } catch (error) {
        console.error('Error al obtener componentes de la base de datos:', error);
        return [];
    }
};

const getDbAll = async () => {
    const dataFrontComponentes = await getDbComponentes();
    const dataFrontPerifericos = await getDbPerifericos();

    const dataAll = dataFrontComponentes.concat(dataFrontPerifericos);

    return dataAll
};

module.exports = {
    getDbAll,
};
