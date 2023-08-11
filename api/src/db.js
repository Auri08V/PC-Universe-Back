require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');

const sequelize = new Sequelize(`postgres://postgres:45075@localhost/pcuniverse`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
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


const { Componentes, Perifericos, PcFinal, Users, Reviews } = sequelize.models;

sequelize.models.PcFinal.hasMany(sequelize.models.Reviews);
sequelize.models.Componentes.hasMany(sequelize.models.Reviews);
sequelize.models.Perifericos.hasMany(sequelize.models.Reviews);
sequelize.models.Users.hasMany(sequelize.models.Reviews);

Perifericos.hasMany(Componentes, { foreignKey: 'periferico_id' });
Componentes.belongsTo(Perifericos, { foreignKey: 'periferico_id' });

PcFinal.hasMany(Componentes, { foreignKey: 'pc_final_id' });
Componentes.belongsTo(PcFinal, { foreignKey: 'pc_final_id' });

PcFinal.hasMany(Perifericos, { foreignKey: 'pc_final_periferico_id' });
Perifericos.belongsTo(PcFinal, { foreignKey: 'pc_final_periferico_id' });

Users.hasOne(PcFinal, { foreignKey: 'User_id' });
PcFinal.belongsTo(Users, { foreignKey: 'User_id' });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};