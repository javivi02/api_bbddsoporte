
import { Router } from 'express'
import { getUsuariosController, createUsuariosController, updateUsuariosController, deleteUsuariosController } from '../controller/usuariosController.js'
import { checkSessionMiddleware } from '../middleware/checkSessionMiddleware.js'

const router = Router()

router.get('/api/usuarios', checkSessionMiddleware, getUsuariosController)
router.post('/api/usuarios', checkSessionMiddleware, createUsuariosController)
router.put('/api/usuarios/:id', checkSessionMiddleware, updateUsuariosController)
router.delete('/api/usuarios/:id', checkSessionMiddleware, deleteUsuariosController)

export default router
