const express = require('express')
const { addUser, login } = require('./auth.controller')
const router = express.Router()

router.put('/add', addUser)
router.post('/login', login)

module.exports = router
