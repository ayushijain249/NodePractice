const express = require("express");
const bodyParser = require("body-parser");
const {findUser, addUser} = require("./db/operations/userOperations.js");

const app = express();
const PORT = 1234;

app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/create-user",(req,res) => {
    const demoUser = {
        name: "Ayushi",
        email: "jayus@amazon.com",
        phone: 9289214424,
        password: "1234"
    };
    addUser(demoUser, res);
});

app.get("/find",(req,res) => {
    const findUserName = {name: "Karan"};
    findUser(findUserName,res);
})

app.listen(PORT, () => {
    console.log(`Server has started on PORT > ${PORT} Happy hosting!!`);
});
