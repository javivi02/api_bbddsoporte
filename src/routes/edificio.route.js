
import { Router } from 'express'
import { getEdificioController, createEdificioController, updateEdificioController, deleteEdificioController } from '../controller/edificioController.js'
import { checkSession } from '../middleware/session.js'

const router = Router()

router.get('/api/edificio', getEdificioController)
router.post('/api/edificio', createEdificioController)
router.put('/api/edificio/:id', updateEdificioController)
router.delete('/api/edificio/:id', deleteEdificioController)

export default router
