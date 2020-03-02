const express = require('express')
const multer = require('multer')

const router = express.Router()
const upload = multer({dest: './public/uploads/'})
const validate = require('../validate/user.validate')
const authMiddleware = require('../middleware/auth.middleware')
const controller = require('../controller/user.controller')

router.get('/users/search', controller.search)
router.get('/',  controller.index)
router.get('/cookie', (req, res) =>{
  res.cookie('user-id', 12345)
  res.send('i am cookie')
})

router.get('/create', controller.create)
router.post('/create',upload.single('avatar'),validate.postCreate, controller.postCreate)
router.get('/:id',controller.id)
module.exports = router
