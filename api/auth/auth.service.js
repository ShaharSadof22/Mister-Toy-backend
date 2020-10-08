const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId
const bcrypt = require('bcrypt')

const saltRounds = 10

module.exports = {
    saveUser,
    login
}
async function saveUser(user) {
    const {password} = user;
    const hash = await bcrypt.hash(password, saltRounds)
    user.password = hash;
    const collection = await dbService.getCollection('user')
    try {
        await collection.insertOne( user )
        delete user.password;
        return user;
    } catch (err) {
        console.log('ERROR: cannot add user')
        throw err;
    }
}
async function login(userCred) {
    console.log("login2222-> userCred", userCred)
    const {password, name} = userCred;

    const collection = await dbService.getCollection('user')

    const isUser = await collection.find({name:name})     
}