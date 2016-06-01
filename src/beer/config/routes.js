import express    from 'express'
import controller from '../controller/controller.js'

let router = express.Router()

router.get('/', controller.findAll)
router.post('/', controller.create)
router.get('/:id', controller.findOne)
router.put('/:id', controller.update)
router.delete('/:id', controller.remove)

router.param('id', controller.findById)

export default router
