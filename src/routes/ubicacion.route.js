
import { Router } from 'express'
import { getUbicacionController, createUbicacionController, updateUbicacionController, deleteUbicacionController } from '../controller/ubicacionController.js'
import { checkSessionMiddleware } from '../middleware/checkSessionMiddleware.js'

const router = Router()

router.get('/api/ubicacion', getUbicacionController)
router.post('/api/ubicacion', createUbicacionController)
router.put('/api/ubicacion/:id', updateUbicacionController)
router.delete('/api/ubicacion/:id', deleteUbicacionController)

export default router
