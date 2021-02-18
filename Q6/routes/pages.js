const express = require('express');
const pages =express.Router();
const path = require('path')



pages.get('/page1',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/index1.html'))
})
pages.get('/page2',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/index2.html'))
})
pages.get('/page3',(req,res)=>{
    res.sendFile(path.join(__dirname,"../public/index3.html"))
})

pages.get('/page4',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/index4.html'))
})
pages.get('/page5',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/index5.html'))
})

module.exports = pages;