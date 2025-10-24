
import { Router } from 'express'
import { getEdificioController, createEdificioController, updateEdificioController, deleteEdificioController } from '../controller/edificioController.js'
import { checkSessionMiddleware } from '../middleware/checkSessionMiddleware.js'

const router = Router()

router.get('/api/edificio', getEdificioController)
router.post('/api/edificio', createEdificioController)
router.put('/api/edificio/:id', updateEdificioController)
router.delete('/api/edificio/:id', deleteEdificioController)

export default router
