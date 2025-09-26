
import { Router } from 'express'
import { getPlantaController, createPlantaController, updatePlantaController, deletePlantaController } from '../controller/plantaController.js'
import { checkSession } from '../middleware/session.js'

const router = Router()

router.get('/api/planta', checkSession, getPlantaController)
router.post('/api/planta', checkSession, createPlantaController)
router.put('/api/planta/:id', checkSession, updatePlantaController)
router.delete('/api/planta/:id', checkSession, deletePlantaController)

export default router
