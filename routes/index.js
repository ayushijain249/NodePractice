const users = require("./user.js");
const {Router} = require("express");

const router = Router();

router.use("/users",users);

module.exports =  router;