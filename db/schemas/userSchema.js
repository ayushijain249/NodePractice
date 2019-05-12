const connection = require("./../connection.js");

const Schema = connection.Schema;

const userSchema = new Schema({
    name: String,
    email: {
      type: String, 
      unique: true
    },
    phone: Number,
    username: {
      type: String, 
      unique: true
    },
    password: String
  });

  const users = connection.model("users",userSchema);

  module.exports = users;
  