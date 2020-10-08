const express = require('express')
const { getToys, getToy, addToy, removeToy} = require('./toy.controller')
const router = express.Router()


router.get('/', getToys)
router.get('/:id', getToy)
router.delete('/:id', removeToy)
router.put('/add', addToy)

module.exports = router