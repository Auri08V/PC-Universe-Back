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


const { Componentes, Perifericos, PcFinal, Users, Reviews, Comentarios, Roles } = sequelize.models;

Users.belongsTo(Roles, { foreignKey: 'roleId' });

Perifericos.hasMany(Comentarios, { foreignKey: 'comentariosPerifericosId' });
Comentarios.belongsTo(Perifericos, { foreignKey: 'comentariosPerifericosId' });

//Componentes y reviews//
Componentes.hasMany(Comentarios, { foreignKey: 'comentariosComponentesId' });
Comentarios.belongsTo(Componentes, { foreignKey: 'comentariosComponentesId' });


Users.hasMany(Comentarios, { foreignKey: 'comentsUserId' });
Comentarios.belongsTo(Users, { foreignKey: 'comentsUserId' });

Perifericos.hasMany(Componentes, { foreignKey: 'periferico_id' });
Componentes.belongsTo(Perifericos, { foreignKey: 'periferico_id' });

//Perifericos y review//
Perifericos.hasMany(Reviews, { foreignKey: 'reviewsPerifericosId' });
Reviews.belongsTo(Perifericos, { foreignKey: 'reviewsPerifericosId' });

//Componentes y reviews//
Componentes.hasMany(Reviews, { foreignKey: 'reviewsComponentesId' });
Reviews.belongsTo(Componentes, { foreignKey: 'reviewsComponentesId' });

//User y reviews//
Users.hasMany(Reviews, { foreignKey: 'reviewsUserId' });
Reviews.belongsTo(Users, { foreignKey: 'reviewsUserId' });


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