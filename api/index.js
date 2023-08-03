const server = require('./src/app');
const { conn } = require('./src/db');
const loadDB = require('./loadDB');
const PORT = 3001;

conn.sync({ force: true }).then(async () => {
    await loadDB();
    server.listen(PORT, () => {
        console.log(`%s listening at port ${PORT}`)
    });
}).catch(error => console.log(error, " EN INDEX.JS"))