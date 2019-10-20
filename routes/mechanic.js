const router = require('express').Router();
const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const {companyChecker1}=require('../middlewares/validators')
const {workerChecker}=require('../middlewares/validators')
dotenv.config();
const connection = mysql.createConnection({
     host: 'localhost',
     user: process.env.Db_Username,
     password: process.env.Db_Password,
     database:process.env.Db_Database
})

//adding a worker in the mechanic company
router.post('/addworkers',companyChecker1,workerChecker,async(req,res)=>{
    const worker_phone = req.body.phoneno
    const name = req.body.name
    const company_id= req.body.email
    const status=req.body.status
    const joining =req.body.joining
    try{
        const salt= await bcrypt.genSalt(10);   
        const hashedpass = await bcrypt.hash(req.body.password, salt);
        const password= hashedpass;    
        const addworker = `insert into workers(worker_phone, name, company_id, passcode, status, joining) 
        values('${worker_phone}','${name}','${company_id}','${password}','${status}','${joining}')`
        const result1=await connection.query(addworker)   
        res.status(200).send(`'${worker_phone}' is registered successfully`)   
    }catch(err){
    res.send(err)
    }   
})

//get all the workers in the company
router.get('/workers',async(req,res)=>{
    const companyid= req.body.companyid
    const workerquery= `select name, phoneno, status from workers where companyid=${companyid}`
    try{
         const workers= await connection.query(workerquery)
         res.status(200).send('workers list')
         return res.json({
            Data:workers
        })
    }catch(err){
        return res.send(err)
    }
})

//available workers or unavailable workers
router.get('/workers/:companyid&:status',async(req,res)=>{
    const companyid= req.params.companyid
    const status=req.params.status
    const workerquery= `select name, phoneno, status from workers where companyid=${companyid} and status=${status}`
    try{
         const workers= await connection.query(workerquery)
         res.status(200).send('workers list')
         return res.json({
            Data:workers
        })
    }catch(err){


        
        return res.send(err)
    }
})

//request that a user made is listed to the mechanic to accept it or not update status
router.put('/userrequesttomechanic',async(req,res)=>{
    const companyid= req.body.companyid
    const choice= req.body.choice
    const userid= req.body.userid
    try{
    if(choice == true){
    const workersname = req.body.workersname
    const workersphone =req.body.workersphone
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

//special offers that a mechanic company can create
router.post('/offers/createoffer',async(req,res)=>{
    const companyid= req.body.companyid
    const offername=req.body.offername
    const originalprice=req.body.price
    const discount= req.body.discount
    const offerdescription= req.body.offerdescription
    const distance= req.body.distance
    const startday= req.body.startday
    const endday= req.body.endday
    const offerquery=`insert into company_offers(offerid, companyid, offername, originalprice, discount, 
          offerdescription, distance, startday, endday) values(,${companyid},${offername},${originalprice},
          ${discount},${offerdescription},${distance},${startday},${endday})`
    try{
        const offer= await connection.query(offerquery)
        return res.status(200).send('Offer has been created successfully')
    }catch(err){
        return res.send(err)
    }     
})


//get active workers
router.get('/activeworkers/:companyid',async(req,res)=>{
     const companyid=req.params.companyid
     const activeworkers=`select workers.workerid, workers.workername, workers.phoneno, 
     workerslocation.latitude, workerslocation.longitude from workers inner join 
     workerslocation on workers.workerid=workerslocation.workerid 
     where workers.companyid=${companyid} and workers.status=${false}`
     try{
     const active= await connection.query(activeworkers)
     res.status(200).send(`${active} workers`)
     res.json({
         Data:active
     })
    }catch(err){
        return res.send(err)
    }
})
module.exports=router