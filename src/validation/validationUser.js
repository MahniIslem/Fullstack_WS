const joi = require('joi')

const validateInput = (input) => {
    const schema = joi.object({
        username : joi.string().max(25).min(3).required(),
        email : joi.string().email().required(),
        password : joi.string().required(),
        birthdate : joi.string().birthdate().required(),
        gender : joi.string().gender().required()
    })

    return schema.validate(input)
}


module.exports.validateInput = validateInput