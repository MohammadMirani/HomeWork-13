const express = require('express');
const getProfile = express.Router();
const path = require('path')
let profile=[];

getProfile.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/Home.html'))
})

getProfile.post('/getProfile', (req, res) => {
     profile = req.body;
    console.log(profile);
    res.send('data received')

})

getProfile.post('/profile', (req, res) => {
    res.send(profile)
})



module.exports = getProfile;