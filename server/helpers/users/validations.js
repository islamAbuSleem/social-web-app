const Joi = require('joi');

const registerSchema = Joi.object({
    username: Joi.string().min(4).max(45).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    name: Joi.string().min(4).max(45).required(),
    coverPic: Joi.string(),
    profilePic: Joi.string(),
    city: Joi.string().max(45),
    website: Joi.string().max(45),

})

module.exports.validateRegister = (data) =>{
    return registerSchema.validate(data)
}