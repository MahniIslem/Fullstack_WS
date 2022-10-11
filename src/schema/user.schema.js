const Mongoose = require('mongoose')

const userSchema = new Mongoose.Schema({
    username : String,
    email : String,
    password : String,
    birthdate : String,
    gender : String
})

const userModel = Mongoose.model('users', userSchema);

module.exports.userModel = userModel;