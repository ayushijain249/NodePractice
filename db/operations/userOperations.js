const users = require("./../schemas/userSchema.js")

const addUser = (userDetails, response) => {
    const userDoc = new users(userDetails);
    userDoc.save((err,doc) => {
        if(err){
            response.status(500).send({status: "failure "});
        }else{
            response.status(201).send({status: "success",userSaved: doc});
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

const authenticateUser = ({username, password}, response) => {
    users.find({username}, (err,doc) => {
        if(err){
            response.status(500).send({status: "Internal Server error!"});
        } else {
            if(doc.length > 0){
                if(doc[0].password == password){
                    response.status(200).send("User Authenticated");
                }
                else{
                    response.status(200).send("Authentication failed");
                }
            }else {
                response.status(200).send("User does not exist");
            }
        }

    })
};

module.exports = {
    addUser,
    findUser,
    authenticateUser
}