const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mercadopago = require("mercadopago");
const createComponenteRoute = require("./routes/getDataRoutes");
const postDataRouter = require("./routes/postDataRouter");
const routeByName = require("./routes/getDataByNameRoute");
const dataFilterRouter = require("./routes/dataFilterRoute");
const componentesRouter = require("./routes/dataByIdRouter");
const pcfinal = require('./routes/getPcRouter');
const deletePcRoute = require("./routes/deletePcRoute");
const payment = require('./routes/paymentRoutes');
const getAllP = require('./routes/getAllProductsRoute');
const reviewRouter = require("./routes/reviewsRouter");
const server = express();

mercadopago.configure({
  access_token: "TEST-2880484440735966-080916-e48fb7bf4c9ee3c40cf62f317ad08397-1446661070",
});

server.use(cors());
server.use(express.json());
server.use(morgan("dev"));


server.use("/", payment);
server.use("/allproducts", getAllP);
server.use("/", pcfinal);
server.use("/", deletePcRoute);
server.use("/productos", createComponenteRoute);
server.use("/", postDataRouter);
server.use("/name", routeByName);
server.use("/filter", dataFilterRouter);
server.use("/producto", componentesRouter);
server.use("/review", reviewRouter)

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
