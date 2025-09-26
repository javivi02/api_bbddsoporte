
import { Router } from 'express'
import { getEstacionesTorreController, createEstacionesTorreController, updateEstacionesTorreController, deleteEstacionesTorreController } from '../controller/estacionesTorreController.js'
import { checkSession } from '../middleware/session.js'

const router = Router()

router.get('/api/estacionesTorre', checkSession, getEstacionesTorreController)
router.post('/api/estacionesTorre', checkSession, createEstacionesTorreController)
router.put('/api/estacionesTorre/:id', checkSession, updateEstacionesTorreController)
router.delete('/api/estacionesTorre/:id', checkSession, deleteEstacionesTorreController)

export default router
