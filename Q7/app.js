const express = require('express');
const app = express();
const path = require('path');
const getProfile = require('./routes/getProfile');
const fs = require('fs')
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname,'public')))

app.use('/user',getProfile)


app.listen(5005, ()=>{
    console.log('server running on port 5005');
})

;