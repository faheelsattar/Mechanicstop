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

//requesting mechanic
router.post('/mechanicrequest', async(req,res)=>{
    const userid=req.body.userid
    const vehicletype= req.body.vehicle
    const vehiclename= req.body.vehiclename
    const model= req.body.model
    const companyid=req.body.companyid
    const userlocation={
        latitude:req.body.latitude,
        longitude:req.body.longitude,
         address:req.body.address
    }
    const mechanicrequest=`insert into mechanic_requests (requestid,userid, companyid, vehicletype, vehiclename, model, latitude, longitude, status, datetime)
     values(,${userid},${companyid},${vehicletype},${vehiclename},${model},${userlocation.latitude},${userlocation.longitude},,)`
    try{
     const result= await connection.query(mechanicrequest)
     res.status(200).send("Request is sent to the mechanic") 
    }catch(err){
        return res.send(err)
    }
})

//getting users reviews about the company
router.get('specificcompany/:compid',async(req,res)=>{
    const companyid= req.params.compid
    const companyinfo= `select user.name, stats.stars, stats.reviews from 
    stats inner join user on stats.userid=user.userid where stats.companyid=${companyid}`
    try{
        const result=await connection.query(companyinfo)
        res.status(200).send(`${companyid} information`)
        res.json({
            Data:result
        })
    }catch(err){
        return res.send(err)
    }
})

//getting all the companies from the mechanic_company for calculating distance in the frontend and then showing
//the appropriate companies
router.get('/mechaniccomp',async(req,res)=>{
    const companies=`select mechanic_company.companyid, mechanic_company.companyname, mechanic_company.latitude,
    mechanic_company.longitude, stats.stars from mechanic_company left join stats on
    mechanic_company.companyid=stats.mechanic_companyid order by stats.stars desc`
    try{
    const result= await connection.query(companies)
    res.status(200).send('List of companies are loaded')
    return res.json({
        Data:result
    })
    }catch(err){
        return res.send(err)
    }
})
module.exports=router 