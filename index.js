const express = require('express')
const mysql =  require('mysql')

const app = express()
app.use(express.json())

//Importing User Routes
const userRoutes = require('./src/routes/user.route')
//Creating User Routes
app.use('/api/userList', userRoutes)


app.get('/', (request, response)=>{
    response.json("Hello World")
})

app.listen(8800, ()=>{
    console.log("Starting My App")
})