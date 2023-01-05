const UserModel = require('../models/user.model')

//Retrieve User List
exports.getUserList = (request, response) => {
    UserModel.getAllUsers((error, users)=>{
        if(error)
            response.send(error);
        response.send(users);
    })
}

//Creating New User
exports.createUser = (request, response) => {
    //console.log('Request Data', request.body)
    const userRequestData = new UserModel(request.body)
    if(request.body.constructor === Object && Object.keys(request.body).length === 0) {
        response.send(400).send({success: false, message: 'Fill Completely'})
    }
    else {
        UserModel.createNewUser(userRequestData, (error, user)=>{
            if(error) 
                response.send(error)
            response.json({status: true, message:'User Creation Success'})
        })
    }
}

//Updating User Via Email
exports.updateUser = (request, response) => {
    const userRequestData = new UserModel(request.body)
    //console.log('Request Data Update', userRequestData)
    if(request.body.constructor === Object && Object.keys(request.body).length === 0) {
        response.send(400).send({success: false, message: 'Fill Completely'})
    }
    else {
        UserModel.updateUser(request.params.email ,userRequestData, (error, user)=>{
            if(error) 
                response.send(error)
            response.json({status: true, message:'User Updation Success'})
        })
    }
}

//Deleting User
exports.deleteUser = (request, response) => {
    UserModel.deleteUser(request.params.email, (error, user)=>{
        if(error)
            response.send(error)
        response.json({status: true, message:'Deletion Successful'})
    })
}
