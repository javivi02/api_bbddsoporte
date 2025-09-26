
import { Router } from 'express'
import { getUsuariosController, createUsuariosController, updateUsuariosController, deleteUsuariosController } from '../controller/usuariosController.js'
import { checkSession } from '../middleware/session.js'

const router = Router()

router.get('/api/usuarios', checkSession, getUsuariosController)
router.post('/api/usuarios', checkSession, createUsuariosController)
router.put('/api/usuarios/:id', checkSession, updateUsuariosController)
router.delete('/api/usuarios/:id', checkSession, deleteUsuariosController)

export default router
