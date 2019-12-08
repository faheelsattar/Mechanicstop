const router = require('express').Router();
const mysql = require('mysql');
const dotenv= require('dotenv');
const bcrypt= require('bcryptjs');
const jwt = require('jsonwebtoken');
const {tokenVerification} = require('../middlewares/tokenauth');
const {userChecker}=require('../middlewares/validators')
const {companyChecker}=require('../middlewares/validators')
const util = require( 'util' );
dotenv.config();
const connection = mysql.createConnection({
     host: 'localhost',
     user: process.env.Db_Username,
     password: process.env.Db_Password,
     database:process.env.Db_Database
})

 makeDb=()=>{
    const connect = connection
    return {
      query( sql, args ) {
        return util.promisify( connect.query )
          .call( connection, sql, args );
      },
      close() {
        return util.promisify( connect.end ).call( connect );
      }
    };
  }

//user register
router.post('/register/user',userChecker, async(req,res)=>{
    const db = makeDb();
    const user_id= req.body.email
    const name= req.body.name
    const phone_no=req.body.phoneno
    try{
        const salt= await bcrypt.genSalt(10);
        const hashedpass = await bcrypt.hash(req.body.password, salt);
        const password= hashedpass;
        const user= `insert into users(user_id,name,phone_no,passcode)values('${user_id}','${name}','${phone_no}','${password}')`
        const result=await db.query(user)
        console.log(result)
        return res.status(200).send(`'${user_id}' is registered `)
    }catch(err){
        return res.send(err)
    }
})

//mechanic_compnay register
router.post('/register/mechaniccompany',companyChecker, async(req,res)=>{
    const db = makeDb();
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
        const result=await db.query(company)
        return res.status(200).send(`'${company_id}' is added`)
    }catch(err){
        return res.send(err)
    }
})

//user login
router.get("/getuser", async(req,res)=>{
    const db = makeDb();
    const emailexists= 'select * from users'
    try{
        const rows=await db.query(emailexists)
        res.send(rows)
    }catch(err){
        console.log(err)
    }
})
router.post('/login/user', async(req,res)=>{
    const db = makeDb();
    const username= req.body.email
    console.log(req.body)
    const emailexists= `select user_id, passcode from users where user_id='${username}'`
  try{
    const result=await db.query(emailexists)
        if(result==''){
            return res.status(400).send('Email doesnot exists')
        }else{
            const checker= await bcrypt.compare(req.body.password,result[0].passcode);
            if(!checker){
               return res.status(400).send('Wrong password')
            }else{
                const token = await jwt.sign({'id': result[0].user_id}, process.env.Secret_Key, { expiresIn: '6h' });
                res.json({Token:token})
                //res.header('auth-token', token).send(token)
                return res.status(200)
            }
        }
    }catch(err){
        res.send(err)
    }
})

//company login
router.post('/login/company', async(req,res)=>{
    const db = makeDb();
    const username= req.body.email;
    const emailexists= `select company_id, company_name, passcode from mechanic_company where company_id ='${username}'`;
  try{
    const result=await db.query(emailexists)
    console.log(result)
        if(result==''){
            return res.status(400).send('Email doesnot exists');
        }else{
            const checker= await bcrypt.compare(req.body.password,result[0].passcode);
            if(!checker){
               return res.status(400).send('Wrong password');
            }else{
                const token = await jwt.sign({'id': result[0].company_id}, process.env.Secret_Key, { expiresIn: '1h' });
                res.json({Token:token})
                //res.header('auth-token', token).send(token)
                return res.status(200)
            }
        }
    }catch(err){
        res.send(err)
    }
})

//worker login
router.post('/login/worker',async(req,res)=>{
    const db = makeDb();
    const phoneno= req.body.workersphone
    const worker= `select workerid, name, phoneno, companyid from workers where phoneno ='${phoneno}'`
    try{
        const result=await db.query(worker)
            if(result==''){
                return res.status(400).send('phoneno doesnot exists')
            }else{
                const checker= await bcrypt.compare(req.body.password,result[0].password)
                if(!checker){
                   return res.status(400).send('Wrong password')
                }else{
                    const token = await jwt.sign({'id': result[0].workerid}, process.env.Secret_Key, { expiresIn: '1h' })
                    res.json({Token:token})
                    //res.header('auth-token', token).send(token)
                    return res.status(200)
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