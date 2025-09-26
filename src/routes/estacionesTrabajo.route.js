
import { Router } from 'express'
import { checkSession } from '../middleware/session.js'
import { getEstacionesTrabajoController, createEstacionesTrabajoController, updateEstacionesTrabajoController, deleteEstacionesTrabajoController } from '../controller/estacionesTrabajoController.js'

const router = Router()

router.get('/api/estacionesTrabajo', checkSession, getEstacionesTrabajoController)
router.post('/api/estacionesTrabajo', checkSession, createEstacionesTrabajoController)
router.put('/api/estacionesTrabajo/:id', checkSession, updateEstacionesTrabajoController)
router.delete('/api/estacionesTrabajo/:id', checkSession, deleteEstacionesTrabajoController)

export default router