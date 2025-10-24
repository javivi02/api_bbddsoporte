import { Router } from 'express'
import { checkController, loginController, registerController } from '../controller/authController.js'
import { checkSessionMiddleware } from '../middleware/checkSessionMiddleware.js'
import { logAuthLoginMiddleware } from '../middleware/logAuthLoginMiddleware.js'
import { logAuthRegisterMiddleware } from '../middleware/logAuthRegisterMiddleware.js'
import { checkRoleMiddleware } from '../middleware/checkRolMiddleware.js'
import { ROLES } from '../config.js'

const router = Router()

router.post('/api/login', logAuthLoginMiddleware, loginController)
router.post('/api/register', logAuthRegisterMiddleware, checkSessionMiddleware, checkRoleMiddleware(ROLES.ADMIN), registerController)
router.get('/api/check', checkSessionMiddleware, checkController)

export default router
