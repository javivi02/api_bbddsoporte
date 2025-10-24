import { Router } from 'express'
import { getPrestamosTipoController } from '../controller/prestamosTipoController.js'
import { checkSessionMiddleware } from '../middleware/checkSessionMiddleware.js'

const router = Router()

router.get('/api/prestamoTipo', getPrestamosTipoController)

export default router
