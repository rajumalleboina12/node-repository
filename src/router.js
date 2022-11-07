const express = require("express");
const router = express.Router();

const {
  registerNewUser,
  getAllUsers,
  getOneUser,
  deleteOneUser,
} = require("./controllers");

router.get("/get-users", getAllUsers);
router.post("/register", registerNewUser);
router.get("/get-one-users", getOneUser);
router.get("/delete-one-users", deleteOneUser);

module.exports = router;
