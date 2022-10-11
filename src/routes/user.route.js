const express = require ('express')
const { deleteUser, createUser, authUser, getUser } = require('../controllers/user.controller')

const router = express.Router()

router.post('/user/login', authUser)

router.post('/user/new', createUser)

router.delete('/user/delete/:id', deleteUser)

router.get('/user/get/:id', getUser)

module.exports = router