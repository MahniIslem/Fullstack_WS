const { response, request } = require('express');
const { validatePub } = require('../validation/validationContent')
const { postModel } = require('../schema/post.schema')

const addPost = async (request, response)=>{

    //let value = request.body;
    
    const { error, value} = validatePub(request.body)

    if(error){
        return response.status(400).send(error.details[0].message)
    }

    let newPost = new postModel({
        id_user : value.id_user,
        content : value.content
    })

    let result = await newPost.save()

    response.send(result)
}

const updatePost = async (request, response)=>{
    
    let id = request.params.id
    let value = request.body;
    
    let result = await postModel.findByIdAndUpdate(id, {
        $set : {
            id_user : value.id_user,
            content : value.content
        }})
        response.send(result)
    }

const deletePost = async (request, response)=>{

    let id = request.params.id;

    await postModel.findByIdAndDelete(id)

    response.send('deleted')
}

const getAllposts = async(request, response)=>{

    let result = await postModel.find()

    response.send(result);
}

const getAllpostsById = async (request, response)=>{

    let id = request.params.id;

    let result = await postModel.find({id_user : id})

    response.send(result)
}

module.exports.updatePost = updatePost
module.exports.addPost = addPost
module.exports.deletePost = deletePost
module.exports.getAllposts =getAllposts 
module.exports.getAllpostsById = getAllpostsById