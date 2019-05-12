const express = require("express");
const bodyParser = require("body-parser");

//const {findUser, addUser, authenticateUser} = require("./db/operations/userOperations.js");
const routes = require("./routes");

const app = express();
const PORT = 1234;

app.use(bodyParser.json());
app.use(express.static("public"));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use("/api",routes);

app.listen(PORT, () => {
    console.log(`Server has started on PORT > ${PORT} Happy hosting!!`);
});
