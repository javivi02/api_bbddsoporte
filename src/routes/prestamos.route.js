
import { Router } from 'express'
import { logMiddlewareLogin } from '../middleware/logAuth.js'
import { getPrestamosController } from '../controller/prestamosController.js'
import { checkSession } from '../middleware/session.js'

const router = Router()

router.get('/api/prestamos', checkSession, getPrestamosController)

export default router
