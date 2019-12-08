const mysql = require('mysql');
const dotenv= require('dotenv');
dotenv.config();
const connection = mysql.createConnection({
     host: 'localhost',
     user: process.env.Db_Username,
     password: process.env.Db_Password,
     database:process.env.Db_Database
})

//checking if the user already exists
const userChecker=(req,res,next)=>{
    const user_id= req.body.email
    const userexist=`select user_id from users where user_id='${user_id}'` 
    connection.query(userexist,function(err,result){
        if(err){
            return res.send(err)
        }else{
        if(result==''){
            next()
        }else{
            console.log(result[0])
            return res.status(400).send("Email exists"+ result[0].user_id)
        }
    }
    })
}

//checking if the company already exists
const companyChecker=(req,res,next)=>{
    const company_id= req.body.email
    const companyexist=`select company_id from mechanic_company where company_id='${company_id}'` 
    connection.query(companyexist,function(err,result){
        if(err){
            return res.send(err)
        }else{
        if(result==''){
            next()
        }else{
            console.log(result[0])
            return res.status(400).send("Email exists"+ result[0].user_id)
        }
    }
    })
}

//checking if the company registering a worker exists or not
const companyChecker1=(req,res,next)=>{
    const company_id= req.body.email
    const companyexist=`select company_id from mechanic_company where company_id='${company_id}'` 
    connection.query(companyexist,function(err,result){
        if(err){
            return res.send(err)
        }else{
        if(result==''){
            return res.status(400).send("Email doesnt exists")     
        }else{
            next()
        }
    }
    })
}

//checking if the worker exists
const workerChecker=(req,res,next)=>{
    const phoneno = req.body.phoneno
    const company_id= req.body.email
    console.log("working")
    const workerexists=`select worker_phone from workers where worker_phone='${phoneno}' and company_id='${company_id}'`
    connection.query(workerexists,function(err,result){
        if(err){
            return res.send(err)
        }else{
        if(result==''){
            next()
        }else{
            console.log(result[0])
            return res.status(400).send("Phone no exists"+ result[0].user_id)
        }
    }
    })
}

const specialFormatTime =()=> {
    now = new Date();
    year = "" + now.getFullYear();
    month = "" + (now.getMonth() + 1); if (month.length == 1) { month = "0" + month; }
    day = "" + now.getDate(); if (day.length == 1) { day = "0" + day; }
    hour = "" + now.getHours(); if (hour.length == 1) { hour = "0" + hour; }
    minute = "" + now.getMinutes(); if (minute.length == 1) { minute = "0" + minute; }
    second = "" + now.getSeconds(); if (second.length == 1) { second = "0" + second; }
    return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
  }

module.exports.userChecker=userChecker
module.exports.companyChecker=companyChecker
module.exports.companyChecker1=companyChecker1
module.exports.workerChecker=workerChecker
module.exports.specialFormatTime=specialFormatTime