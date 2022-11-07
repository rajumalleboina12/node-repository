const { userData, createUser, login } = require("./src/controllers");

const express = require("express");
var bodyParser = require("body-parser");
const server = express();
const cors = require("cors");
server.use(cors());
const router = require("./src/router");
const dbConnect = require("./src/utils/db");

server.use(bodyParser.json());

server.use("/api", router);

server.listen(4003, () => {
  console.log("server started");
});
