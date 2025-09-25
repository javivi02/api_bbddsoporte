import { Router } from 'express'
import {
  getPortatilController,
  getPortatilesController, getPortatilesPaginationController, getPortatilUpdateController, getPortatilDelete
} from '../controller/portatilesController.js'
import { checkSession } from '../middleware/session.js'

const router = Router()

router.get('/api/portatiles', checkSession, getPortatilesController)
router.get('/api/portatilesPag', checkSession, getPortatilesPaginationController)
router.get('/api/portatiles/:id', checkSession, getPortatilController)
router.put('/api/portatiles/:id', checkSession, getPortatilUpdateController)
router.delete('/api/portatiles/:id', checkSession, getPortatilDelete)

export default router