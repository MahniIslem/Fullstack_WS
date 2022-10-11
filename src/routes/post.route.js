const express = require ('express')
const { updatePost, deletePost, getAllposts, addPost, getAllpostsById } = require('../controllers/post.controller')

const router = express.Router()

router.post('/post/new', addPost)

router.put('/post/update/:id', updatePost)

router.delete('/post/delete/:id', deletePost)

router.get('/posts/all', getAllposts)

router.get('/post/get/all/:id', getAllpostsById)


module.exports = router