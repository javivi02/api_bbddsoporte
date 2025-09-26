import { Router } from 'express'
import { getEstacionesEdicionController } from '../controller/estacionesEdicionController.js'
import { checkSession } from '../middleware/session.js'

const router = Router()

router.get('/api/estacionesEdicion', checkSession, getEstacionesEdicionController)

export default router
