const express= require('express');
const app= express();
const mysql = require('mysql');
const bodyparser= require('body-parser')
const dotenv= require('dotenv');
const authRoute= require('./routes/auth');
const userRoutes= require('./routes/user');
const mechanicRoutes=require('./routes/mechanic')
const requestRoutes= require('./routes/requests')


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
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, auth-token");
    next();
  });
app.use('/auth',authRoute)
app.use('/user',userRoutes)
app.use('/mechanic',mechanicRoutes)
app.use('/requests',requestRoutes)
app.get('/',(req,res)=>{
    res.send('Home');
})

app.listen(4000, ()=>{
    console.log("Server up and running")
})