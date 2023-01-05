const express = require('express')
const router = express.Router()

const userController = require('../controllers/user.controller')

//User List
router.get('/', userController.getUserList)
module.exports = router