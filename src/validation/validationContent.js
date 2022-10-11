const joi = require('joi')

const validatePub = (input) => {
    const schema = joi.object({
        id_user : joi.string().required(),
        content : joi.string().min(5).required()
    })

    return schema.validate(input)
}

const validateComment = (input) => {
    const schema = joi.object({
        id_user : joi.string().required(),
        id_publication : joi.string().required(),
        comment : joi.string().min(3).required()
    })

    return schema.validate(input)
}


module.exports.validatePub = validatePub
module.exports.validateComment = validateComment