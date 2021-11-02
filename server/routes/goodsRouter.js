const Router = require('express')
const router = new Router()
const goodsController = require('../controllers/goodsController')
//const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')
//checkRoleMiddleware('ADMIN')

router.delete('/delete', goodsController.deleteOne)
router.post('/create', goodsController.create)
router.get('/goods', goodsController.getAll)
router.get('/goods/:id', goodsController.getOne)

module.exports = router