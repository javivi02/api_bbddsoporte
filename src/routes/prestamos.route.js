import { Router } from 'express'
import {
  getPrestamosController,
  getPrestamosPaginationController,
  getPrestamoByIdController,
  createPrestamoController,
  updatePrestamoController,
  deletePrestamoController
} from '../controller/prestamosController.js'
import { checkSession } from '../middleware/session.js'

const router = Router()

router.get('/api/prestamos', getPrestamosController)
router.get('/api/prestamosPagination', getPrestamosPaginationController)
router.get('/api/prestamos/:id', getPrestamoByIdController)
router.post('/api/prestamos', createPrestamoController)
router.put('/api/prestamos/:id', updatePrestamoController)
router.delete('/api/prestamos/:id', deletePrestamoController)

export default router
