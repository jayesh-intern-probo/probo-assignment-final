const express = require('express')
const mysql =  require('mysql')
const bodyParser = require('body-parser')

const app = express()
app.use(express.json())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Importing User Routes
const userRoutes = require('./src/routes/user.route')
//Creating User Routes
app.use('/api/user', userRoutes)

//Creating Root Routes
app.get('/', (request, response)=>{
    response.json("Hello World")
})

app.listen(8800, ()=>{
    console.log("Starting My App")
})