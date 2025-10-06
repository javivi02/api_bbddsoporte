
import { Router } from 'express'
import { getEstacionesTorreController, createEstacionesTorreController, updateEstacionesTorreController, deleteEstacionesTorreController, getEstacionesTorreUbicacionController, getEstacionesTorreControllerID, getEstacionesTorreUbicacionControllerPaginacion } from '../controller/estacionesTorreController.js'
import { checkSession } from '../middleware/session.js'

const router = Router()

router.get('/api/estacionesTorre', checkSession, getEstacionesTorreController)
router.get('/api/estacionesTorreUbicacion', getEstacionesTorreUbicacionController)
router.get('/api/estacionesTorreUbicacionPaginacion', getEstacionesTorreUbicacionControllerPaginacion)
router.post('/api/estacionesTorre', createEstacionesTorreController)
router.get('/api/estacionesTorre/:id', getEstacionesTorreControllerID)  
router.put('/api/estacionesTorre/:id', updateEstacionesTorreController)
router.delete('/api/estacionesTorre/:id', deleteEstacionesTorreController)

export default router
