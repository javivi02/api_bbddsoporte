import { Router } from 'express'
import {
  getPortatilController,
  getPortatilesController,
  getPortatilesStockController
} from '../controller/portatilesController.js'
import { logMiddlewareLogin } from '../middleware/logAuth.js'
import { checkSession } from '../middleware/session.js'

const router = Router()

router.get('/api/portatiles', checkSession, getPortatilesController)

router.get('/api/portatilesStock', checkSession, getPortatilesStockController)

router.get('/api/portatil/:id', checkSession, getPortatilController)

export default router