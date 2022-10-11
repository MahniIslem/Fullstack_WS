const express = require ('express')
const { addComment, deleteComment, getComment } = require('../controllers/comment.controller')

const router = express.Router()

router.post('/comment/new', addComment)

router.delete('/comment/delete', deleteComment)

router.get('/comment/get/:id', getComment)

module.exports = router