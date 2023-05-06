const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/router");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const account = new Schema(
  {
    username: String,
    pasword: Number,
    paswordagain: Number,
  },
  { collection: "data" }
);
const accountModel = mongoose.model("data", account);

const mongoModel = mongoose.model("data", account);
module.exports = mongoModel;
