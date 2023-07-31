import { Router } from 'express'
import { logMiddlewareLogin } from '../middleware/logAuth.js'
import { getPrestamoController, getPrestamosController } from '../controller/prestamosController.js'
import { checkSession } from '../middleware/session.js'


const router = Router()

router.get('/api/prestamos', checkSession, getPrestamosController)
router.get('/api/prestamo/:id', checkSession, getPrestamoController)

export default router