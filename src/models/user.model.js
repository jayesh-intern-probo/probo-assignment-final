const dbConnection = require('../../config/db.config')

var User = (user) => {
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

module.exports = User