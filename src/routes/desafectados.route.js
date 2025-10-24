
import { Router } from 'express'
import { getDesafectadosController, createDesafectadosController, updateDesafectadosController, deleteDesafectadosController } from '../controller/desafectadosController.js'
import { checkSessionMiddleware } from '../middleware/checkSessionMiddleware.js'

const router = Router()

router.get('/api/desafectados', checkSessionMiddleware, getDesafectadosController)
router.post('/api/desafectados', checkSessionMiddleware, createDesafectadosController)
router.put('/api/desafectados/:id', checkSessionMiddleware, updateDesafectadosController)
router.delete('/api/desafectados/:id', checkSessionMiddleware, deleteDesafectadosController)

export default router
