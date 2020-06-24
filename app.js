const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require("body-parser")
//const mongodb = require('mongodb')
const url = "mongodb://localhost/alienx"
const app = express();

mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

con.on('open',function(){
    console.log("connected...")
})
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

const alienrt = require('./routes/aleins')
app.use('/aleins',alienrt)

app.listen(9000,function(){
    console.log("server started...")
})