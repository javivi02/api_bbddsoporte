import { Router } from 'express'
import {
  getPortatilController,
  getPortatilesController, getPortatilesControllerPaginacion, getPortatilUpdateController, createPortatilController, deletePortatilController
} from '../controller/portatilesController.js'
import { checkSession } from '../middleware/session.js'

const router = Router()

router.get('/api/portatiles', getPortatilesController)
router.get('/api/portatilesPaginacion', getPortatilesControllerPaginacion)
router.get('/api/portatiles/:id', getPortatilController)
router.post('/api/portatiles', createPortatilController)
router.put('/api/portatiles/:id', getPortatilUpdateController)
router.delete('/api/portatiles/:id', deletePortatilController)

export default router
