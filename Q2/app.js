const express =require('express');
const app = express();
const path = require('path')

app.use(express.static(path.join(__dirname,'public')))
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/public/login.html'))
})

app.listen(5005,()=>{
    console.log('server is running on port 5005');
})