const express = require("express");
const router1 = express.Router();

const { arrayobj, arrayobj1, arrayobj2 } = require("./controllers1");

router1.get("/get-arrayobj", arrayobj);
router1.get("/get-string", arrayobj1);
router1.get("/get-number-age", arrayobj2);

module.exports = router1;
