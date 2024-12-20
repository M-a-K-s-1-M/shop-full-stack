const Router = require('express')
const router = new Router();
const userRouter = require('../controllers/userController')

router.post('/registration', userRouter.reagistration)
router.post('/login', userRouter.login)
router.get('/auth', userRouter.check)

module.exports = router;