const Mongoose = require('mongoose')

const commentSchema = new Mongoose.Schema({
    id_user : String,
    id_publication : String,
    comment : String
})

const commentModel = Mongoose.model('comments', commentSchema);

module.exports.commentModel = commentModel;