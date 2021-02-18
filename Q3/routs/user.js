const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('Home Page')
})

router.get('/profile',(req,res)=>{
    res.send('Profile Page')
})

router.get('/contact',(req,res)=>{
    res.send('Contact Page')
})

router.get('/specific',(req,res)=>{
    res.send('Specific Page')
})




module.exports = router;