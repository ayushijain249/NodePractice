const {Router} = require("express");
const {findUser, addUser, authenticateUser} = require("../db/operations/userOperations.js");

const router = Router();

/*const demoUser = {
    name: "Ayushi",
    email: "jayus@amazon.com",
    phone: 9289214424,
    username: "ayujain",
    password: "1234"
};*/
router.post("/",(req,res) => {
    const newUser= {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    username: req.body.username,
    password: req.body.password
    };
     addUser(newUser, res);
});

router.get("/find",(req,res) => {
    const findUserName = {name: "Karan"};
    findUser(findUserName,res);
});

router.post("/authenticate",(req,res) => {
    const authUser = {username: req.body.username, password: req.body.password};
    authenticateUser(authUser,res);
})

module.exports = router;


