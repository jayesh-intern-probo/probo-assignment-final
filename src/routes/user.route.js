const express = require('express')
const router = express.Router()

const userController = require('../controllers/user.controller')

//User List
router.get('/', userController.getUserList)
//Create User
router.post('/', userController.createUser)
//Update Employee
router.put('/:email', userController.updateUser)
//Delete Employee
router.delete('/:email', userController.deleteUser)

module.exports = router