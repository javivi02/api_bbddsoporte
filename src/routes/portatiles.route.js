
import { Router } from 'express'
import {
  getPortatilController,
  getPortatilesController, getPortatilesPaginationController, getPortatilUpdateController, createPortatilController, deletePortatilController 
} from '../controller/portatilesController.js'
import { checkSession } from '../middleware/session.js'

const router = Router()

router.get('/api/portatiles', checkSession, getPortatilesController)
router.get('/api/portatilesPag', checkSession, getPortatilesPaginationController)
router.get('/api/portatiles/:id', checkSession, getPortatilController)
router.post('/api/portatiles', checkSession, createPortatilController)
router.put('/api/portatiles/:id', checkSession, getPortatilUpdateController)
router.delete('/api/portatiles/:id', checkSession, deletePortatilController)

export default router