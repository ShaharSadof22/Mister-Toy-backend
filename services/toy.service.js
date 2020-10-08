const fs = require('fs')

var toys = require('../data/toy.json')

module.exports = {
    query,
    getById,
    save,
    remove
}

function query() {
    return Promise.resolve(toys)
}
function getById(toyId) {
    const toy = toys.filter(toy => toy._id === toyId)[0]
    return Promise.resolve(toy)
}
function save(toyToSave) {
    toys.push(toyToSave)
    _saveCarsToFile()
    return Promise.resolve(toyToSave)
}
function remove(toyId) {
    toys = toys.filter(toy => toy._id !== toyId)
    _saveCarsToFile()
    return Promise.resolve(toys)
}


 

function _saveCarsToFile() {
    fs.writeFileSync('data/toy.json', JSON.stringify(toys, null, 2));
}