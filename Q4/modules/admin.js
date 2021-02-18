const express = require('express');
const admin = express.Router();
const path = require('path')

admin.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../data.json'))
})


module.exports = admin;