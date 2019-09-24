const jwt=require('jsonwebtoken');

const tokenVerification=(req,res,next)=>{
    const token = req.header('auth-token');
    if(!token)
    return res.status(401).send('Access denied');
    try{
    var checker=jwt.verify(token,process.env.Secret_Key);
    next();
    }catch(err){
        res.status(400).send('Invalid token');
    }
}

module.exports.tokenVerification=tokenVerification