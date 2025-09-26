
import { Router } from 'express'
import { getAuricularesPrestamosController, createAuricularesPrestamosController, updateAuricularesPrestamosController, deleteAuricularesPrestamosController } from '../controller/auricularesPrestamosController.js'
import { checkSession } from '../middleware/session.js'

const router = Router()

router.get('/api/auricularesPrestamos', checkSession, getAuricularesPrestamosController)
router.post('/api/auricularesPrestamos', checkSession, createAuricularesPrestamosController)
router.put('/api/auricularesPrestamos/:id', checkSession, updateAuricularesPrestamosController)
router.delete('/api/auricularesPrestamos/:id', checkSession, deleteAuricularesPrestamosController)

export default router
