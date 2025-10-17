import { Router } from 'express'
import { getPrestamosTipoController } from '../controller/prestamosTipoController.js'
import { checkSession } from '../middleware/session.js'

const router = Router()

router.get('/api/prestamoTipo', getPrestamosTipoController)

export default router
