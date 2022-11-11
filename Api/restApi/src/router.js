const express = require("express");
const router = express.Router();
const { usersData, friendsData } = require("./controllers");

router.get("/usersData", usersData);
router.get("/friendsData", friendsData);

module.exports = router;
