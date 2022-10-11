const Mongoose = require('mongoose')

const postSchema = new Mongoose.Schema({
    id_user : String,
    content : String
})

const postModel = Mongoose.model('posts', postSchema);

module.exports.postModel = postModel;