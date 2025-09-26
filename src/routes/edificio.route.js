
import { Router } from 'express'
import { getEdificioController, createEdificioController, updateEdificioController, deleteEdificioController } from '../controller/edificioController.js'
import { checkSession } from '../middleware/session.js'

const router = Router()

router.get('/api/edificio', checkSession, getEdificioController)
router.post('/api/edificio', checkSession, createEdificioController)
router.put('/api/edificio/:id', checkSession, updateEdificioController)
router.delete('/api/edificio/:id', checkSession, deleteEdificioController)

export default router
