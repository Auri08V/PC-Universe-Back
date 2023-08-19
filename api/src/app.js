const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const fileUpload = require("express-fileupload")

const mercadopago = require("mercadopago");
const createComponenteRoute = require("./routes/getRoutes/getDataRoutes/getDataRoutes");
const postpcR = require("./routes/postRoutes/postDataRoutes/postDataRouter");
const routeByName = require("./routes/getRoutes/getDataRoutes/getDataByNameRoute");
const dataFilterRouter = require("./routes/getRoutes/getDataRoutes/dataFilterRoute");
const componentesRouter = require("./routes/getRoutes/getDataRoutes/dataByIdRouter");
const pcfinal = require('./routes/getRoutes/getDataRoutes/getPcRouter');
const deletePcRoute = require("./routes/deleteRoutes/deletePcRoute");
const payment = require('./routes/getRoutes/paymentsRoutes/paymentRoutes');
const getpayment = require('./routes/getRoutes/paymentsRoutes/getPRecordsRoute');
const getAllP = require('./routes/getRoutes/getDataRoutes/getAllProductsRoute');
const reviewRouter = require("./routes/postRoutes/postReviewsRoutes/reviewsRouter");
const ratings = require('./routes/getRoutes/getReviewsRoutes/getRatingsRoute');
const comentarioRouter = require('./routes/postRoutes/postReviewsRoutes/comentariosRouter');
const getcoments = require('./routes/getRoutes/getReviewsRoutes/getComentsRoute');
const postuser = require('./routes/postRoutes/usersRoutes/postUserRoute');
const loginR = require('./routes/postRoutes/usersRoutes/loginRoute');
const users = require('./routes/getRoutes/getUsersRoute');
const stock = require('./routes/putRoutes/putStockRoute');
const newProduct = require("./routes/postRoutes/postDataRoutes/postNewProduct")
const role = require('./routes/putRoutes/putRoleRoute');
const price = require('./routes/putRoutes/putPriceRoute');
const server = express();

mercadopago.configure({
  access_token: "TEST-2880484440735966-080916-e48fb7bf4c9ee3c40cf62f317ad08397-1446661070",
});

server.use(cors());
server.use(express.json());
server.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/uploads'
}));
server.use(morgan("dev"));

server.use('/', getpayment);
server.use('/', price);
server.use('/', role);
server.use('/', stock);
server.use('/', users);
server.use('/', loginR);
server.use('/', postuser);
server.use('/', getcoments);
server.use("/", comentarioRouter);
server.use("/", ratings);
server.use("/", payment);
server.use("/", getAllP);
server.use("/", pcfinal);
server.use("/", deletePcRoute);
server.use("/", createComponenteRoute);
server.use("/", postpcR);
server.use("/", routeByName);
server.use("/", dataFilterRouter);
server.use("/", componentesRouter);
server.use("/", reviewRouter)
server.use("/", newProduct)

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
