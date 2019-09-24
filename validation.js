const joi = require('@hapi/joi');

const regValidation=(value)=>{
    const regschema={
        username: joi.string().min(6).required().email(),
        password: joi.string().min(6).required()
    }
    return joi.validate(value,regschema);
}

const loginValidation=(value)=>{
    const loginschema={
        username: joi.string().min(6).required().email(),
        password: joi.string().min(6).required()
    }
    return joi.validate(value,loginschema);
}

module.exports.regValidation=regValidation;
module.exports.loginValidation=loginValidation;