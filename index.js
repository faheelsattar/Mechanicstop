const express= require('express');
const app= express();
const mysql = require('mysql');
const bodyparser= require('body-parser')
const dotenv= require('dotenv');

dotenv.config();
const connection = mysql.createConnection({
     host: 'localhost',
     user: process.env.Db_Username,
     password: process.env.Db_Password,
     database:process.env.Db_Database
})
connection.connect(err =>{
    if(err){
        return err;
    }
});
console.log(connection)
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
const authRoute= require('./routes/auth');
app.use('/',authRoute)
app.get('/',(req,res)=>{
    res.send('Home');
})

app.listen(3000, ()=>{
    console.log("Server up and running")
})