const Users = require("./models");

const registerNewUser = (req, res) => {
  var newUser = Users(req.body);
  newUser.save().then((response) => {
    return res.json(response);
  });
};

const getAllUsers = (req, res) => {
  Users.find().then((users) => {
    return res.json(users);
  });
};

const getOneUser = (req, res) => {
  var userId = req.query._id;
  Users.findById(userId).then((response) => {
    return res.json({ status: "delete", user: response });
  });
};

const deleteOneUser = (req, res) => {
  var userId = req.query._id;
  Users.findByIdAndDelete(userId).then((response) => {
    return res.json(response);
  });
};

module.exports = { registerNewUser, getAllUsers, getOneUser, deleteOneUser };
