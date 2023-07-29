import { Router } from 'express'
import { logMiddleware } from '../middleware/log.js'
import { getPrestamosController } from '../controller/prestamosController.js'
import { checkSession } from '../middleware/session.js'


const router = Router()

router.get('/api/prestamos', logMiddleware, checkSession, getPrestamosController)

export default router