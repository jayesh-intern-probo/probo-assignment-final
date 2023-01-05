const mysql = require('mysql')

const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "userdetails"
})

database.connect(function(error){
    if(error)
        throw error
    console.log("Database Connected Sucessfully")
})

module.exports = database;