import { Router } from 'express'

import { checkSession } from '../middleware/session.js'
import { getEstacionesTrabajoController } from '../controller/estacionesTrabajoController.js'

const router = Router()

router.get('/api/estacionesTrabajo', checkSession, getEstacionesTrabajoController)

export default router