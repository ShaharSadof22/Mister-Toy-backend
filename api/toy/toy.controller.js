var express = require('express');
const toyService = require('./toy.service')

module.exports = {
    getToys,
    getToy,
    addToy,
    removeToy
}

async function getToys(req, res) {
    const toys = await toyService.query()
    res.send(toys)
}
async function getToy(req, res) {
    const toy = await toyService.getById(req.params.id)
    res.send(toy)
}
async function addToy(req, res) {
    const toy = req.body
    const toys = await toyService.save(toy)
    res.end('Toy added')
}
async function removeToy(req, res) {
    const toyId = req.params.id
    await toyService.remove(toyId)
    res.end('Toy removed')
}
