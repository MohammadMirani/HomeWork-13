const express = require('express');
const app = express();
const admin = require('./modules/admin');
const user = require('./modules/user');
const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.use('/admin', admin)
app.use('/user', user)
app.use(express.static(path.join(__dirname, 'public')))


app.listen(5005, () => {
    console.log('server is running on port 5005');
})


