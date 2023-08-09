const express = require("express");
const morgan = require("morgan");
const cors = require("cors")
const createComponenteRoute = require("./routes/getDataRoutes");
const postDataRouter = require("./routes/postDataRouter")
const pcfinal = require('./routes/getPcRoutes');
const getbyname = require('./routes/componentesRouter');

const server = express();


server.use(cors())
server.use(express.json())
server.use(morgan("dev"));

server.use("/", pcfinal);
server.use("/", getbyname);
server.use("/", createComponenteRoute);
server.use("/", postDataRouter)

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
