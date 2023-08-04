import { Router } from 'express'
import {
  getPortatilController,
  getPortatilesController, getPortatilUpdateController,
} from '../controller/portatilesController.js'
import { checkSession } from '../middleware/session.js'

const router = Router()

router.get('/api/portatiles', checkSession, getPortatilesController)

router.get('/api/portatiles/:id', checkSession, getPortatilController)

router.put('/api/portatiles/:id', checkSession, getPortatilUpdateController)

export default router