const { arrayobj, arrayobj1, arrayobj2 } = require("./src/controllers1");

const express = require("express");

const server = express();
const cors = require("cors");
server.use(cors());
const router1 = require("./src/router1");
const dbConnect = require("./src/utils/db");

server.use("/api", router1);

server.listen(4005, () => {
  console.log("server started");
});
