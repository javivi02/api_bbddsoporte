
import { Router } from 'express'
import { getAuricularesPrestamosController, createAuricularesPrestamosController, updateAuricularesPrestamosController, deleteAuricularesPrestamosController } from '../controller/auricularesPrestamosController.js'
import { checkSessionMiddleware } from '../middleware/checkSessionMiddleware.js'

const router = Router()

router.get('/api/auricularesPrestamos', checkSessionMiddleware, getAuricularesPrestamosController)
router.post('/api/auricularesPrestamos', checkSessionMiddleware, createAuricularesPrestamosController)
router.put('/api/auricularesPrestamos/:id', checkSessionMiddleware, updateAuricularesPrestamosController)
router.delete('/api/auricularesPrestamos/:id', checkSessionMiddleware, deleteAuricularesPrestamosController)

export default router
