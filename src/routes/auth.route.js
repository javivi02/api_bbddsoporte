import { Router } from 'express'
import { loginController, registerController } from '../controller/authController.js'

const router = Router()

router.post('/api/login', loginController)

router.post('/api/register', registerController)

export default router