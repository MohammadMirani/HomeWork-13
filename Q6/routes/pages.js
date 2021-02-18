const express = require('express');
const pages =express.Router();
const path = require('path')


pages.get('/:i',(req, res, next)=>{
    const {i} =req.params; 
    res.sendFile(path.join(__dirname,`../public/index${i}.html`))

})

module.exports = pages;