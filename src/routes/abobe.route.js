import { Router } from 'express'
import { getAbobeController, createAbobeController, updateAbobeController, deleteAbobeController } from '../controller/abobeController.js'
import { checkSession } from '../middleware/session.js'

const router = Router()


router.get('/api/abobe', checkSession, getAbobeController)
router.post('/api/abobe', checkSession, createAbobeController)
router.put('/api/abobe/:id', checkSession, updateAbobeController)
router.delete('/api/abobe/:id', checkSession, deleteAbobeController)

export default router
