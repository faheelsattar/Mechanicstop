const router = require('express').Router();
const mysql = require('mysql');
const dotenv= require('dotenv');
dotenv.config();
const connection = mysql.createConnection({
     host: 'localhost',
     user: process.env.Db_Username,
     password: process.env.Db_Password,
     database:process.env.Db_Database
})

router.get('/workers',(req,res)=>{
    console.log('workers')
})
module.exports=router 