//const { array } = require("i/lib/util");
const mongoose = require("mongoose");
const dbConnect = require("./utils/db");

const useSchema1 = mongoose.Schema({
  name: Array,
  address: String,
  age: Number,
  details: Object,
});

const Users1 = dbConnect.model(" Users1", useSchema1);
module.exports = Users1;
