require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const httpStatus = require("http-status");
const v1Route = require("./routes/index");
const CustomError = require("./middlewares/customError");
const connectMongoose = require("./config/mongoConfig");

const app = express();
const { NODE_PORT } = process.env;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.options("*", cors());
app.use(morgan('dev'));
app.use(helmet());

connectMongoose();

app.use("/v1", v1Route);
// Wrapped response
app.response.sendWrapped = function (
  message,
  statusCode = httpStatus.OK,
  data
) {
  return this.status(statusCode).send({
    status: statusCode,
    message,
    data,
  });
};
// Not found
app.use((req, res, next) => {
  res.sendWrapped("Sorry can't find that!", httpStatus.NOT_FOUND);
});
// Error handler
app.use((err, req, res, next) => {
  console.log("err", err)
  if (err instanceof CustomError) {
    res.status(err.statusCode).send({
      status: err.statusCode,
      message: err.message,
    });
  } else {
    res.sendWrapped(err, httpStatus.INTERNAL_SERVER_ERROR);
  }

  next();
});

app.listen(NODE_PORT, () => {
  console.log(`Server running at port ${NODE_PORT}`);
});

module.exports = app;
