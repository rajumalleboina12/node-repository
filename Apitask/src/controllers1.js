const Users1 = require("./models1");
const mongoose = require("mongoose");
const dbConnect = require("./utils/db");

const arrayobj = (req, res) => {
  var newUser = Users1({
    name: "raju",
    address: "hyderabad",
    age: "24",
    details: { name: "avinash", result: "passed" },
  });
  // newUser.save().then((response) => {
  return res.json(newUser);
  //});
  /*var arr = [{ name: "raju", address: "hyderabad" }];
  return res.json(arr);*/
};

const arrayobj1 = (req, res) => {
  var str = "raju";
  return res.json(str);
};

const arrayobj2 = (req, res) => {
  var num = 25;
  return res.json(num);
};

module.exports = { arrayobj, arrayobj1, arrayobj2 };
