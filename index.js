require('dotenv').config()
console.log(process.env)
const express = require("express");

const app = express();
const Port = 4000;

app.get('/', (req, res)=>{
    res.send('Hello World')
})

app.listen(process.env.PORT, ()=>console.log(`Server is started at ${Port}`))