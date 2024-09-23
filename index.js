const express = require("express")
require('dotenv').config()
const app = express()
const port = 4000

app.get('/',(req,res)=>{
    res.send('Hello world')
})

app.get('/twitter',(req,res)=>{
    res.send('rajTwitter007')
})

app.get('/login',(req,res)=>{
    res.send('<h1>login here</h1>')
})

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${port}`);
})