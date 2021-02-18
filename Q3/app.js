const express = require('express');
const app = express();
const path = require('path');
const router = require('./routs/user')

app.use('/user', router)


app.listen(5005, () => {
    console.log('server is running on port 5005');
})