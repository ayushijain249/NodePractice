const users = require("./../schemas/userSchema.js")

const addUser = (userDetails, response) => {
    const userDoc = new users(userDetails);
    userDoc.save((err,doc) => {
        if(err){
            response.status(500).send({status: "failure "});
        }else{
            response.send({status: "success",userSaved: doc});
        }
    });
};

//destructures arguments from userdetails => {name} to make it easy to understand

const findUser = ({ name }, response) => {
    users.find({name},(err,doc)=> {
        if(err){
            response.status(500).send({status: "failure"});
        } else {
            if(doc.length >0 ){
                response.send("user exists");
            }else {
                response.send("no such user exists");
            }
        }
    });
};

module.exports = {
    addUser,
    findUser
}