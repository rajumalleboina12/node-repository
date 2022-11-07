const express = require("express");
const router1 = express.Router();

const { arrayobj } = require("./controllers1");

router1.get("/get-arrayobj", arrayobj);

module.exports = router1;
