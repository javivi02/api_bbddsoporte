import { Router } from 'express'
import { getPortatilController, getPortatilesController } from '../controller/portatilesController.js'
import { logMiddleware } from '../middleware/log.js'
import { checkSession } from '../middleware/session.js'

const router = Router()

router.get('/api/portatiles', logMiddleware, checkSession, getPortatilesController)

router.get('/api/portatil/:id', getPortatilController)

export default router