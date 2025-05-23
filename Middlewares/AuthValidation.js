const Joi = require("joi");

const registrationValidation = (req,res,next) => {
    const schema = Joi.object({
        username:Joi.string().min(3).max(100).required(),
        email:Joi.string().email().required(),
        password:Joi.string().min(4).max(100).required()
    })

    const {error} = schema.validate(req.body);

    if (error){
        return res.status(400).json({message:"Bad Request",error})
    }

    next();
    
}


const loginValidation = (req,res,next) => {
    const schema = Joi.object({
        username:Joi.string().min(3).max(100).required(),
        password:Joi.string().min(4).max(100).required()
    })

    const {error} = schema.validate(req.body);
    
    if (error){
        return res.status(400).json({message:"Bad Request" ,error})
    }
    next()
}

module.exports = {registrationValidation,loginValidation}