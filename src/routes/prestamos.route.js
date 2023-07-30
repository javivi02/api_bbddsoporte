import { Router } from 'express'
import { logMiddleware } from '../middleware/log.js'
import { getPrestamoController, getPrestamosController } from '../controller/prestamosController.js'
import { checkSession } from '../middleware/session.js'


const router = Router()

router.get('/api/prestamos', logMiddleware, checkSession, getPrestamosController)
router.get('/api/prestamo/:id', logMiddleware, checkSession, getPrestamoController)

export default router