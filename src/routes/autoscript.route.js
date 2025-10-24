
import { Router } from 'express'
import { getAutoscriptController, createAutoscriptController, updateAutoscriptController, deleteAutoscriptController } from '../controller/autoscriptController.js'
import { checkSessionMiddleware } from '../middleware/checkSessionMiddleware.js'

const router = Router()

router.get('/api/autoscript', checkSessionMiddleware, getAutoscriptController)
router.post('/api/autoscript', checkSessionMiddleware, createAutoscriptController)
router.put('/api/autoscript/:id', checkSessionMiddleware, updateAutoscriptController)
router.delete('/api/autoscript/:id', checkSessionMiddleware, deleteAutoscriptController)

export default router
