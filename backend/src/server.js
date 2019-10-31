const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const routes = require("./routes");
const server = express();

mongoose.connect(
  "mongodb+srv://dev:manogel@cluster0-xdxft.mongodb.net/airbnb?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

server.use(cors());
server.use(express.json());
server.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
server.use(routes);
server.listen(3333);
