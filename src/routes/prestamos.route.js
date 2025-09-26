
import { Router } from 'express'
import { logMiddlewareLogin } from '../middleware/logAuth.js'
import { getPrestamoController, getPrestamosController, createPrestamoController, updatePrestamoController, deletePrestamoController } from '../controller/prestamosController.js'
import { checkSession } from '../middleware/session.js'

const router = Router()

router.get('/api/prestamos', checkSession, getPrestamosController)
router.get('/api/prestamos/:id', checkSession, getPrestamoController)
router.post('/api/prestamos', checkSession, createPrestamoController)
router.put('/api/prestamos/:id', checkSession, updatePrestamoController)
router.delete('/api/prestamos/:id', checkSession, deletePrestamoController)

export default router