const fs = require('fs');
const axios = require('axios');
const { Componentes, Perifericos } = require('./src/db');
const loadDB = async () => {
    const DBcomponents = await Componentes.findAll();
    const DBperifericos = await Perifericos.findAll();
    if (!DBcomponents.length && !DBperifericos.length) {
        try {
            const jsonData = require('./DB.json');
            const dataApiC = jsonData.componentes.map((el) => {
                return {
                    id: el.id,
                    modelo: el.modelo,
                    especificaciones: JSON.stringify(el.especificaciones),
                    img: el.img,
                    precio: parseInt(el.precio),
                    stock: 100,
                    categoria: el.categoria
                };
            });
            for (let i = 0; i < dataApiC.length; i++) {
                await Componentes.findOrCreate({
                    where: { modelo: dataApiC[i].modelo },
                    defaults: dataApiC[i],
                });
            };
            const dataApiP = jsonData.perifericos.map((el) => {
                return {
                    id: el.id,
                    tipo: el.tipo,
                    modelo: el.modelo,
                    especificaciones: JSON.stringify(el.especificaciones),
                    precio: el.precio,
                    stock: 100,
                    categoria: el.categoria,
                    img: el.img
                };
            });
            for (let j = 0; j < dataApiP.length; j++) {
                await Perifericos.findOrCreate({
                    where: { modelo: dataApiP[j].modelo },
                    defaults: dataApiP[j],
                });
            };
            console.log("the data has been successfully saved");
        } catch (err) {
            console.error("Error loading data:", err);
        }
    }
};

module.exports = loadDB;