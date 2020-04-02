const Joi = require('@hapi/joi');

const signUpValidation = (req,res,next) => {
    const schema = Joi.object({
        name: Joi.string().min(6).max(255).required().pattern(new RegExp('^[a-zA-Z]{6,255}$')),
        email: Joi.string().min(6).max(255).required().email(),
        password: Joi.string().min(6).max(1024).required()
    })

    const {error} = schema.validate(req.body)
    if(error) return res.status(400).send(error.details[0].message)
    next();
}

const signInValidation = (req,res,next) => {
    const schema = Joi.object({
        email: Joi.string().min(6).max(255).required().email(),
        password: Joi.string().min(6).max(1024).required()
    })

    const {error} = schema.validate(req.body)
    if(error) return res.status(400).send(error.details[0].message)
    next();
}

module.exports.signUpValidation = signUpValidation;
module.exports.signInValidation = signInValidation;