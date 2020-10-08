const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
    save,
    remove
}
async function query() {
    const collection = await dbService.getCollection('toy')
    try {
        const toys = await collection.find().toArray()
        return toys
    } catch (err) {
        console.log('ERROR: cannot find toys')
        throw err;
    }
}
async function getById(toyId) {
    const collection = await dbService.getCollection('toy')
    try {
        const toy = await collection.findOne({"_id":ObjectId(toyId)})
        return toy
    } catch (err) {
        console.log('ERROR: cannot find toy')
        throw err;
    }
}
async function save(toy) {
    const collection = await dbService.getCollection('toy')
    try {
        await collection.insertOne( toy );
        return toy
    } catch (err) {
        console.log('ERROR: cannot add toy')
        throw err;
    }
}
async function remove(toyId) {
    const collection = await dbService.getCollection('toy')
    try {
        await collection.remove({"_id":ObjectId(toyId)})
    } catch (err) {
        console.log('ERROR: cannot remove toy')
        throw err;
    }
}