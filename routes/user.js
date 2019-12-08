const router = require('express').Router();
const mysql = require('mysql');
const dotenv= require('dotenv');
const util = require( 'util' );
const geolib = require('geolib');
const {specialFormatTime}=require('../middlewares/validators')
const {tokenVerification} = require('../middlewares/tokenauth');


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
//requesting mechanic
router.post('/mechanicrequest',tokenVerification, async(req,res)=>{
    const userid=res.locals.user
    const vehicletype= req.body.vehicle
    const vehiclename= req.body.vehiclename
    const model= req.body.model
    const description = req.body.description
    const companyid=req.body.companyid  
    const latitude=req.body.latitude
    const longitude=req.body.longitude
    const mechanicrequest=`insert into mechanic_requests (request_ID,user_id, company_id, vehicle_type, vehicle_name, vehicle_model, description, latitude, longitude, status, time) values(DEFAULT,'${userid}',
     '${companyid}','${vehicletype}','${vehiclename}','${model}','${description}','${latitude}','${longitude}',NULL,NOW())`
     try{
     const db = makeDb()
     const result= await db.query(mechanicrequest)
     return res.status(200).send("Request is sent to the mechanic") 
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

router.get('/mechaniccompanies',async(req,res)=>{ 
    const {lat,long}=req.query   
    console.log(
        'You are ',
        geolib.getPreciseDistance(
            {latitude: lat, longitude: long },
            {latitude: 24.8987045, longitude: 67.0820293},
            0.01
        ),
        'meters away from 51.525, 7.4575'
    );
    //const companies=`select mechanic_company.companyid, mechanic_company.companyname, mechanic_company.latitude,
   // mechanic_company.longitude, stats.stars from mechanic_company left join stats on
   // mechanic_company.companyid=stats.mechanic_companyid order by stats.stars desc`
    const companies=`select company_id, company_name, latitude,
    longitude from mechanic_company `
    try{
    const db = makeDb()
    const result= await db.query(companies)
    const data=[]
    for(let index=0; index < result.length; index++){
    const distance=geolib.getPreciseDistance(
            {latitude: lat, longitude: long },
            {latitude: result[index].latitude, longitude: result[index].longitude},
            0.01
        )
    if(distance<=4000){
        data.push(result[index])
    }
    }
    console.log(data) 
    res.json({
        Data:data
    })
    }catch(err){
        return res.send(err)
    }
})
module.exports=router 