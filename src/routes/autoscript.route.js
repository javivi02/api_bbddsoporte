
import { Router } from 'express'
import { getAutoscriptController, createAutoscriptController, updateAutoscriptController, deleteAutoscriptController } from '../controller/autoscriptController.js'
import { checkSession } from '../middleware/session.js'

const router = Router()

router.get('/api/autoscript', checkSession, getAutoscriptController)
router.post('/api/autoscript', checkSession, createAutoscriptController)
router.put('/api/autoscript/:id', checkSession, updateAutoscriptController)
router.delete('/api/autoscript/:id', checkSession, deleteAutoscriptController)

export default router
