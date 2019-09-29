const router = require('express').Router();
const mysql = require('mysql');
const dotenv= require('dotenv');
const bcrypt= require('bcryptjs');
const jwt = require('jsonwebtoken');
const {regValidation , loginValidation} = require('../validation');
const {tokenVerification} = require('../middlewares/tokenauth');
import Workers from '../classes/Workers'
import { get } from 'http';
dotenv.config();
const connection = mysql.createConnection({
     host: 'localhost',
     user: process.env.Db_Username,
     password: process.env.Db_Password,
     database:process.env.Db_Database
})

router.post('/register', async (req,res)=>{
    const {error}= regValidation(req.body);
    if(error)
    return res.status(400).send(error.details[0].message);
    const username= req.body.username;
    const emailexists= `select username from _users where username ='${username}'`;
    const result= await connection.query(emailexists)
    try{
            if(result== ''){
                const salt= await bcrypt.genSalt(10);
                const hashedpass = await bcrypt.hash(req.body.password, salt);
                const password= hashedpass;
                const insertuser= `insert into _users (username,password) values('${username}', '${password}')`;
                connection.query(insertuser, (err,result)=>{
                    if(err){                                                                         
                       return res.send(err);
                    }else{
                       return res.send(`'${username} is added'`);
                  }
                }) 
            }else{
               return res.status(400).send('Email already exists');
            }
        }catch(err){
            res.send(err)
        }      
})

router.post('/login', async(req,res)=>{
    const {error}= loginValidation(req.body);
    if(error)
    return res.status(400).send(error.details[0].message);
    const username= req.body.username;
    const password= req.body.password;
    const emailexists= `select userId,userName,password from _users where username ='${username}'`;
  try{
    const result=await connection.query(emailexists)
        if(result==''){
            return res.status(400).send('Email doesnot exists');
        }else{
            const checker= await bcrypt.compare(password,result[0].password);
            if(!checker){
               return res.status(400).send('Wrong password');
            }else{
                const token = await jwt.sign({'id': result[0].userId}, process.env.Secret_Key, { expiresIn: '1h' });
                res.header('auth-token', token).send(token)
            }
        }
    }catch(err){
        res.send(err)
    }
})

router.post('/addworkers', async(req,res)=>{
        worker=new Workers(req.body.firstname,req.body.lastname, req.body.phoneno)
        const workerchecker=`select phoneno from workers where phoneno=${req.body.phoneno}`
    try{
        const result= await connection.query(workerchecker)
        if(result){
           return res.status(400).send('Worker already exists')
        }else{
        const addworker = `insert into workers (workerid, name, companyid, phoneno, status) values (,${worker.getName},,${worker.getPhoneNo},${worker.getStatus})`
        const result1=await connection.query(addworker)   
         res.status(200).send("Worker is registered successfully")   
        }
    }catch(err){
        res.send(err)
    }   
})

router.post('/mechanicrequest', async(req,res)=>{
    const userid=req.body.userid
    const vehicletype= req.body.vehicle
    const vehiclename= req.body.vehiclename
    const model= req.body.model
    const companyid=req.body.companyid
    const location={
        'latitude':req.body.latitude,
        'longitude':req.body.longitude,
        'address':req.body.address
    }
    const mechanicrequest=`insert into mechanic_requests (userid, companyid, vehicletype, vehiclename, model, latitude, longitude, location_address, status, datetime)
     values(${userid},${companyid},${vehicletype},${vehiclename},${model},${location.latitude},${location.longitude},${location.address})`
    try{
     const result= await connection.query(mechanicrequest)
     res.status(200).send("Request is sent to the mechanic") 
    }catch(err){
        return res.send(err)
    }
})
router.get('/requests/:userid',async(req,res)=>{
    const userid=req.params.userid
    const getuserrequests=`select userid, companyid, vehicletype, vehiclename, model, 
     latitude, longitude, location_address, status, datetime 
    from mechanic_requests where userid=${userid} or companyid=${userid} order by datetime desc`
    try{
    const userrequests= await connection.query(getuserrequests)
    res.status(200).send(userrequests) 
    }catch(err){
        return res.send(err)
    }
})
router.put('userrequesttomechanic',async(req,res)=>{
    const companyid= req.body.companyid
    const choice= req.body.choice
    const userid= req.body.userid
    try{
    if(choice == true){
    const workersname = req.body.workersname
    const workersphone = req.body.workersphone
    const companyrequests=`update mechanic_requests Set status=${choice} where userid= ${userid} and status=NULL`
    const updatecompanyrequests = await connection.query(companyrequests)
    const workers= `update workers Set status=True where name=${workersname} and phoneno=${workersphone} and companyid=${companyid} `
    const workerupdate = await connection.query(workers)
    res.status(200).send(`Status is true for ${workersname}`)
    }else{
        const companyrequests=`update mechanic_requests Set status=${choice} where userid= ${userid} and status=NULL`
        const updatecompanyrequests = await connection.query(companyrequests)
        res.status(200).send('User Request as been rejected')    
    }  
    }catch(err){
        return res.send(err)
    }
})
router.get('availablemechanics',async(req,res)=>{
    const available=`select companyname from mechanics where status=`
})
router.get('/post', tokenVerification, (req,res)=>{
    res.send('Its my first post')
})

module.exports=router 