const mongoose = require("mongoose");
const {dbpath} = require("./config.js");

mongoose.connect(dbpath);

module.exports = mongoose;

