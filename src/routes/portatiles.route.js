import { Router } from 'express'
import {
  getPortatilController,
  getPortatilesController,
} from '../controller/portatilesController.js'
import { logMiddlewareLogin } from '../middleware/logAuth.js'
import { checkSession } from '../middleware/session.js'

const router = Router()

router.get('/api/portatiles', checkSession, getPortatilesController)

router.get('/api/portatiles/:id', checkSession, getPortatilController)

export default router