const express = require('express');
const user = express.Router();
const path = require('path')
const fs = require('fs')

user.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/user.html'))
})

user.post('/getUser', (req, res) => {
    let userClient = req.body.user;
    let c = 0;
    
    try {
        let usersInformation = fs.readFileSync('data.json', 'utf-8')
        let userJson = JSON.parse(usersInformation);
        for (let i = 0; i < userJson.length; i++) {
            if (userJson[i].firstName === userClient) {
                console.log(userJson[i]);
                res.send(userJson[i]);
                c++;
            }
        }
        if (c == 0) {
            res.send("user not found, client side")
            console.log("user not found, server side");
        }

    } catch {
        console.log('error reading data');
    }
})



module.exports = user;
