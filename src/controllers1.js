const Users1 = require("./models");
const mongoose = require("mongoose");
const dbConnect = require("./utils/db");

const arrayobj = (req, res) => {
  /**var newUser = Users(req.body);
  newUser.save().then((response) => {
    return res.json(response);
  });*/

  return res.json("i am array obj");
};

module.exports = { arrayobj };
