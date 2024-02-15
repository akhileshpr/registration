const express = require('express')

const studentController = require('../Controller/studentController')
const router = new express.Router()

router.post('/register',studentController.register)

router.get('/all-data',studentController.getAllData)

module.exports=router
