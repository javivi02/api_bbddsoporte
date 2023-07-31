import { Router } from 'express'
import { checkController, loginController, registerController } from '../controller/authController.js'
import { checkSession } from '../middleware/session.js'
import { logMiddlewareLogin } from '../middleware/logAuth.js'

const router = Router()

router.post('/api/login', logMiddlewareLogin, loginController)

router.post('/api/register', registerController)

router.get('/api/check', checkSession, checkController)

export default router