require("dotenv").config();
const mongoose = require("mongoose");

const { MONGODB } = process.env;

const connectMongoose = () => {
  mongoose.connect(MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;

  db.on("error", (err) => {
    console.log("Fail to connect to MongoDB: ", err);
  });

  db.on("open", () => {
    console.log("Connected to MongoDB");
  });
};

module.exports = connectMongoose;
