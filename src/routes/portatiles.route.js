import { Router } from 'express'
import {
  getPortatilController,
  getPortatilesController,
  getPortatilesStockController
} from '../controller/portatilesController.js'
import { logMiddleware } from '../middleware/log.js'
import { checkSession } from '../middleware/session.js'

const router = Router()

router.get('/api/portatiles', logMiddleware, checkSession, getPortatilesController)

router.get('/api/portatilesStock', logMiddleware, checkSession, getPortatilesStockController)

router.get('/api/portatil/:id', logMiddleware, checkSession, getPortatilController)

export default router