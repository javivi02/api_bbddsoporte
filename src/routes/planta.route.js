
import { Router } from 'express'
import { getPlantaController, createPlantaController, updatePlantaController, deletePlantaController } from '../controller/plantaController.js'
import { checkSession } from '../middleware/session.js'

const router = Router()

router.get('/api/planta', getPlantaController)
router.post('/api/planta', createPlantaController)
router.put('/api/planta/:id', updatePlantaController)
router.delete('/api/planta/:id', deletePlantaController)

export default router
