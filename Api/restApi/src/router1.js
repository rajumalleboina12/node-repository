const express = require("express");
const router1 = express.Router();
const { signinData, loginData } = require("./controllers1");

router1.get("/signinData", signinData);
router1.get("/loginData", loginData);

module.exports = router1;
