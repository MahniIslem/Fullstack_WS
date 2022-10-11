const { response, request } = require('express');
const { validateComment } = require('../validation/validationContent')
const { commentModel } = require('../schema/comment.schema')

const addComment = async (request, response)=>{

    //let value = request.body;
    
    const { error, value} = validateComment(request.body)

    if(error){
        return response.status(400).send(error.details[0].message)
    }

    let newComment = new commentModel({
        id_user : value.id_user,
        id_publication : value.id_publication,
        comment : value.comment
    })

    let result = await newComment.save()

    response.send(result)
}

const getComment = async (request, response)=>{
    
    let id = request.params.id

    let result = await commentModel.find({ id_publication : id})
    
    response.send(result);
}

const deleteComment = async (request, response)=>{

    let id = request.params.id;

    await commentModel.findByIdAndDelete(id)

    response.send('comment deleted')
}

module.exports.getComment = getComment
module.exports.addComment = addComment
module.exports.deleteComment = deleteComment