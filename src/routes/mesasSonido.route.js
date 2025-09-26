
import { Router } from 'express'
import { getMesasSonidoController, createMesasSonidoController, updateMesasSonidoController, deleteMesasSonidoController } from '../controller/mesasSonidoController.js'
import { checkSession } from '../middleware/session.js'

const router = Router()

router.get('/api/mesasSonido', checkSession, getMesasSonidoController)
router.post('/api/mesasSonido', checkSession, createMesasSonidoController)
router.put('/api/mesasSonido/:id', checkSession, updateMesasSonidoController)
router.delete('/api/mesasSonido/:id', checkSession, deleteMesasSonidoController)

export default router
