const express = require ('express')
const helmet = require ('helmet')
const morgan = require('morgan')
const Mongoose = require('mongoose')
const cors = require('cors')


const app = express()
const port = 8000 || env.PORT

app.use(express.json())
app.use(helmet())
app.use(morgan("dev"))
app.use(cors())

const userRoutes = require('./routes/user.route')
const postRoutes = require('./routes/post.route')
const commentRoutes = require('./routes/comment.route')

app.use(userRoutes)
app.use(postRoutes)
app.use(commentRoutes)

app.listen(port, ()=>{
    console.log(`server started on port : ${port}`)
    Mongoose.connect("mongodb+srv://MHNx3086:Vizizvvjw19!@cluster0.gmyjfae.mongodb.net/Smedia_db")
        .then(()=>{
            console.log('database connected')
        })
        .catch((error)=>{
            console.log(error)
        })
})
