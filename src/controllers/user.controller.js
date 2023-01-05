const UserModel = require('../models/user.model')

//Retrieve User List
exports.getUserList = (request, response) => {
    UserModel.getAllUsers((error, users)=>{
        if(error)
            response.send(error);
        response.send(users);
    })
}