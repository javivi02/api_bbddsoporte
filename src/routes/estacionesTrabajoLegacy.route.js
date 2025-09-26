import { Router } from 'express'
import { getEstacionesTrabajoLegacyController } from '../controller/estacionesTrabajoLegacyController.js'
import { checkSession } from '../middleware/session.js'

const router = Router()

router.get('/api/estacionesTrabajoLegacy', checkSession, getEstacionesTrabajoLegacyController)

export default router
