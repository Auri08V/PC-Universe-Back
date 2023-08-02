require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pcuniverse`, {
  logging: false, 
  native: false, 
});
const basename = path.basename(__filename);

const modelDefiners = [];


fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });


modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);


const { Componentes, Perifericos, PcFinal } = sequelize.models;


// PcFinal.hasMany(Componentes, { foreignKey: 'pcFinalId' });
// Componentes.belongsTo(PcFinal, { foreignKey: 'pcFinalId' });

// PcFinal.hasMany(Perifericos, { foreignKey: 'pcFinalPerifericoId' });
// Perifericos.belongsTo(PcFinal, { foreignKey: 'pcFinalPerifericoId' });
PcFinal.hasMany(Componentes, { foreignKey: 'pc_final_id' });
Componentes.belongsTo(PcFinal, { foreignKey: 'pc_final_id' });

PcFinal.hasMany(Perifericos, { foreignKey: 'pc_final_periferico_id' });
Perifericos.belongsTo(PcFinal, { foreignKey: 'pc_final_periferico_id' });

module.exports = {
  ...sequelize.models, 
  conn: sequelize,     
};
