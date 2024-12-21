const Router = require('express')
const router = new Router();
const userRouter = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userRouter.reagistration)
router.post('/login', userRouter.login)
router.get('/auth', authMiddleware, userRouter.check)

module.exports = router;