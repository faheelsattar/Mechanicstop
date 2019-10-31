const router = require('express').Router();
const mysql = require('mysql');
const dotenv= require('dotenv');
const bcrypt= require('bcryptjs');
const jwt = require('jsonwebtoken');
const {tokenVerification} = require('../middlewares/tokenauth');
const {userChecker}=require('../middlewares/validators')
const {companyChecker}=require('../middlewares/validators')
dotenv.config();
const connection = mysql.createConnection({
     host: 'localhost',
     user: process.env.Db_Username,
     password: process.env.Db_Password,
     database:process.env.Db_Database
})

//user register
router.post('/register/user',userChecker, async(req,res)=>{
    const user_id= req.body.email
    const name= req.body.name
    const phone_no=req.body.phoneno
    try{
        const salt= await bcrypt.genSalt(10);
        const hashedpass = await bcrypt.hash(req.body.password, salt);
        const password= hashedpass;
        const user= `insert into users(user_id,name,phone_no,passcode)values('${user_id}','${name}','${phone_no}','${password}')`
        const result=await connection.query(user)
        return res.status(200).send(`'${user_id}' is registered `)
    }catch(err){
        return res.send(err)
    }
})

//mechanic_compnay register
router.post('/register/mechaniccompany',companyChecker, async(req,res)=>{
    const company_id= req.body.email
    const company_name= req.body.name
    const latitude=req.body.latitude
    const longitude= req.body.longitude
    const phone_no=req.body.phoneno
    const status= req.body.status
    try{
        const salt= await bcrypt.genSalt(10);
        const hashedpass = await bcrypt.hash(req.body.password, salt);
        const password= hashedpass;
        const company= `insert into mechanic_company(company_id,company_name,latitude,longitude,passcode,status,phone_no)
        values('${company_id}','${company_name}','${latitude}','${longitude}','${password}','${status}','${phone_no}')`
        const result=await connection.query(company)
        return res.status(200).send(`'${company_id}' is added`)
    }catch(err){
        return res.send(err)
    }
})

//incomplete route user login
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

//worker login
router.post('/login/worker',async(req,res)=>{
    const phoneno= req.body.workersphone;
    const password= req.body.password;
    const worker= `select workerid, name, phoneno,companyid from workers where phoneno ='${phoneno}'`;
    try{
        const result=await connection.query(worker)
            if(result==''){
                return res.status(400).send('phoneno doesnot exists');
            }else{
                const checker= await bcrypt.compare(password,result[0].password);
                if(!checker){
                   return res.status(400).send('Wrong password');
                }else{
                    const token = await jwt.sign({'id': result[0].workerid}, process.env.Secret_Key, { expiresIn: '1h' });
                    res.header('auth-token', token).send(token)
                }
            }
        }catch(err){
            res.send(err)
        }
})

router.get('/post', tokenVerification, (req,res)=>{
    
    res.send('Its my first post')
})

module.exports=router 