
import { Router } from 'express'
import { getDesafectadosController, createDesafectadosController, updateDesafectadosController, deleteDesafectadosController } from '../controller/desafectadosController.js'
import { checkSession } from '../middleware/session.js'

const router = Router()

router.get('/api/desafectados', checkSession, getDesafectadosController)
router.post('/api/desafectados', checkSession, createDesafectadosController)
router.put('/api/desafectados/:id', checkSession, updateDesafectadosController)
router.delete('/api/desafectados/:id', checkSession, deleteDesafectadosController)

export default router
