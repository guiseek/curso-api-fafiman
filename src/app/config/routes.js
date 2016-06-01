import express      from 'express'

import beerRouter     from '../../beer/config/routes.js'

let router = new express.Router()

router.use('/cervejas', beerRouter)

export default router