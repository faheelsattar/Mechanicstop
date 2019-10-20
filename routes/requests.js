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

//request history for the user and the company
router.get('/:userid',async(req,res)=>{
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
module.exports=router 