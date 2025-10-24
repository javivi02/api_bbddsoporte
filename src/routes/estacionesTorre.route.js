import { Router } from 'express'
import { getEstacionesTorreController, createEstacionesTorreController, updateEstacionesTorreController, deleteEstacionesTorreController, getEstacionesTorreUbicacionController, getEstacionesTorreControllerID, getEstacionesTorreUbicacionControllerPaginacion, getEstacionesTorreControllerCheckDuplicate } from '../controller/estacionesTorreController.js'
import { checkSessionMiddleware } from '../middleware/checkSessionMiddleware.js'

const router = Router()

router.get('/api/estacionesTorre', checkSessionMiddleware, getEstacionesTorreController)
router.get('/api/estacionesTorreCheckDuplicate', getEstacionesTorreControllerCheckDuplicate)
router.get('/api/estacionesTorreUbicacion', getEstacionesTorreUbicacionController)
router.get('/api/estacionesTorreUbicacionPaginacion', getEstacionesTorreUbicacionControllerPaginacion)
router.post('/api/estacionesTorre', createEstacionesTorreController)
router.get('/api/estacionesTorre/:id', getEstacionesTorreControllerID)
router.put('/api/estacionesTorre/:id', updateEstacionesTorreController)
router.delete('/api/estacionesTorre/:id', deleteEstacionesTorreController)

export default router
