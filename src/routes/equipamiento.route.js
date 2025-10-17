import { Router } from 'express'
import { createEquipamientoController, deleteEquipamientoController, getEquipamientoController, getEquipamientoUpdateController, getEquipamientosController, getEquipamientosControllerPaginacion, getEquipamientosStockController } from '../controller/equipamientoController.js'
import { checkSession } from '../middleware/session.js'

const router = Router()

router.get('/api/equipamiento', getEquipamientosController)
router.get('/api/equipamientoPaginacion', getEquipamientosControllerPaginacion)
router.get('/api/equipamientoStock', getEquipamientosStockController)
router.get('/api/equipamiento/:id', getEquipamientoController)
router.post('/api/equipamiento', createEquipamientoController)
router.put('/api/equipamiento/:id', getEquipamientoUpdateController)
router.delete('/api/equipamiento/:id', deleteEquipamientoController)

export default router
