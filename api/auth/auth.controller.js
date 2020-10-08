var express = require('express');
const authService = require('./auth.service')

module.exports = {
    addUser,
    login
}

async function addUser(req, res) {
    const user = req.body
    await authService.saveUser(user)
    res.end('User added')
}
async function login(req, res) {
    const userCred = req.body
    await authService.login(userCred)
    res.end('User login')
}
