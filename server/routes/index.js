const Router = require('express')
const router = new Router();
const userRouter = require('./userRouter')
const deviceRouter = require('./deviceRouter')
const typeRouter = require('./typeRouter')
const brandRouter = require('./brandRouter')


router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)

module.exports = router;