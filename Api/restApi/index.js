const { signinData, loginData } = require("./src/controllers1");

const express = require("express");
const app = express();
const cors = require("cors");
const router1 = require("./src/router1");
const mongoose = require("mongoose");

var dbConnection = mongoose.createConnection(
  "mongodb+srv://raju:1185@Proclink@cluster0.bft6drf.mongodb.net/?retryWrites=true&w=majority"
);

dbConnection.on("connect", () => {
  console.log("Connected with database");
});

app.use(cors());
app.get("/signinData", signinData);
app.get("/loginData", loginData);

app.use("/auth", router1);

app.listen(4001, () => {
  console.log("server started on port 4001");
});
