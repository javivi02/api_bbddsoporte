
import { Router } from 'express'
import { getUbicacionController, createUbicacionController, updateUbicacionController, deleteUbicacionController } from '../controller/ubicacionController.js'
import { checkSession } from '../middleware/session.js'

const router = Router()

router.get('/api/ubicacion', checkSession, getUbicacionController)
router.post('/api/ubicacion', checkSession, createUbicacionController)
router.put('/api/ubicacion/:id', checkSession, updateUbicacionController)
router.delete('/api/ubicacion/:id', checkSession, deleteUbicacionController)

export default router
