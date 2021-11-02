const Router = require('express')
const router = new Router()
const goodsRouter = require('./goodsRouter')
//const userRouter = require('./userRouter')
//router.use('/user', userRouter)

router.use('/', goodsRouter)

module.exports = router