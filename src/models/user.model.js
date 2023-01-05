const dbConnection = require('../../config/db.config')

var User = function(user) {
    this.id = user.id
    this.first_name = user.first_name
    this.last_name = user.last_name
    this.email = user.email
    this.phone = user.phone
    this.img = user.img
}

User.getAllUsers = (result) =>{
    dbConnection.query('SELECT * FROM users', (error, response)=>{
        if(error){
            console.log('Error Reterieving List', error)
            result(null, error)
        }
        else {
            console.log('List Retrieved Sucessfully')
            result(null, response)
        }
    })
}

User.createNewUser = (userRequestData, result) =>{
    const queryText = "INSERT INTO users(`first_name`,`last_name`,`email`,`phone`,`img`) VALUES (?)"
    const values = [
        userRequestData.first_name,
        userRequestData.last_name,
        userRequestData.email,
        userRequestData.phone,
        userRequestData.img
    ];

    dbConnection.query(queryText, [values], (error, response)=>{
        if(error) {
            console.log('Insertion Failed')
            result(null, error)
        }
        else {
            console.log('Created Successfully')
            result(null, response)     
        }
    })
}

User.updateUser = (userEmail, userRequestData, result)=>{
    const queryText = "UPDATE users SET `first_name` = ?,`last_name` = ?, `email` = ?, `phone` = ?,`img` = ? WHERE email = ?";

    const values = [
        userRequestData.first_name,
        userRequestData.last_name,
        userRequestData.email,
        userRequestData.phone,
        userRequestData.img
    ];

    dbConnection.query(queryText, [...values, userEmail], (error, response)=>{
        if(error) {
            console.log('Updation Failed')
            result(null, error)
        }
        else {
            console.log('Updated Successfully')
            result(null, response)
        }
    })
}

User.deleteUser = (userEmail, result)=>{
    const queryText = "DELETE FROM users WHERE email = ?"

    dbConnection.query(queryText, [userEmail], (error, response)=>{
        if(error) {
            console.log('Deletion Failed')
            result(null, error)
        }
        else 
            result(null, response)
    })
}

module.exports = User