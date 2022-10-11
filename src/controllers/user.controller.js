const { response, request } = require('express');
const { validateInput } = require('../validation/validationUser')
const { userModel } = require('../schema/user.schema')

const authUser = async (request, response)=>{
    
    //let value = request.body

    const { error, value} = validateInput(request.body)

    if(error){
        return response.status(400).send(error.details[0].message)
    }
    
    let result = await userModel.find({
        email : value.email,
        password : value.password
    })
    if (result.length > 0){
        return response.send(result[0]) 
    }else{
        return response.send("not found")
    }
}

const createUser = async (request, response)=>{
    
    //let value = request.body;

    const { error, value} = validateInput(request.body)

    if(error){
        return response.status(400).send(error.details[0].message)
    }

    response.send(request.body);
    
    let newUser = new userModel({
        username : value.username,
        email : value.email,
        password : value.password,
        birthdate : value.birthdate,
        gender : value.gender
    })

    let result = await newUser.save()

    response.send(result)
}

const deleteUser = async (request, response)=>{

    let id = request.params.id;

    await userModel.findByIdAndDelete(id)

    response.send('deleted')
}

const getUser = async (request, response)=>{
    
    let id = request.params.id

    let result = await userModel.findById(id)
    
    response.send(result);
}

module.exports.authUser = authUser
module.exports.createUser = createUser
module.exports.deleteUser = deleteUser
module.exports.getUser = getUser