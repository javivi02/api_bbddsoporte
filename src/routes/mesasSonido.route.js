
import { Router } from 'express'
import { getMesasSonidoController, createMesasSonidoController, updateMesasSonidoController, deleteMesasSonidoController } from '../controller/mesasSonidoController.js'
import { checkSessionMiddleware } from '../middleware/checkSessionMiddleware.js'

const router = Router()

router.get('/api/mesasSonido', checkSessionMiddleware, getMesasSonidoController)
router.post('/api/mesasSonido', checkSessionMiddleware, createMesasSonidoController)
router.put('/api/mesasSonido/:id', checkSessionMiddleware, updateMesasSonidoController)
router.delete('/api/mesasSonido/:id', checkSessionMiddleware, deleteMesasSonidoController)

export default router
