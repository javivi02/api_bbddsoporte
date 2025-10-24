import { Router } from 'express'
import { getAutoscriptTipoController, createAutoscriptTipoController, updateAutoscriptTipoController, deleteAutoscriptTipoController } from '../controller/autoscriptTipoController.js'
import { checkSessionMiddleware } from '../middleware/checkSessionMiddleware.js'

const router = Router()


router.get('/api/autoscriptTipo', checkSessionMiddleware, getAutoscriptTipoController)
router.post('/api/autoscriptTipo', checkSessionMiddleware, createAutoscriptTipoController)
router.put('/api/autoscriptTipo/:id', checkSessionMiddleware, updateAutoscriptTipoController)
router.delete('/api/autoscriptTipo/:id', checkSessionMiddleware, deleteAutoscriptTipoController)

export default router
