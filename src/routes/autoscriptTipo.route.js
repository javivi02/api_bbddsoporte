import { Router } from 'express'
import { getAutoscriptTipoController, createAutoscriptTipoController, updateAutoscriptTipoController, deleteAutoscriptTipoController } from '../controller/autoscriptTipoController.js'
import { checkSession } from '../middleware/session.js'

const router = Router()


router.get('/api/autoscriptTipo', checkSession, getAutoscriptTipoController)
router.post('/api/autoscriptTipo', checkSession, createAutoscriptTipoController)
router.put('/api/autoscriptTipo/:id', checkSession, updateAutoscriptTipoController)
router.delete('/api/autoscriptTipo/:id', checkSession, deleteAutoscriptTipoController)

export default router
