const { Router } = require('express')
const multer = require('multer')
const uploadConfig = require('../configs/upload')


const UsersController = require('../controller/UsersController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')
const UserAvatarController = require('../controller/UserAvatarController')


const usersRoutes = Router()
const upload = multer(uploadConfig.MULTER)

const usersController = new UsersController()
const usersAvatarController = new UserAvatarController()

usersRoutes.post('/', usersController.create)
usersRoutes.put('/',ensureAuthenticated ,usersController.update)
usersRoutes.patch('/avatar', ensureAuthenticated, upload.single('avatar'), usersAvatarController.update)

module.exports = usersRoutes