
import { Router } from 'express'
import { getMiembrosDepartamentoController, createMiembrosDepartamentoController, updateMiembrosDepartamentoController, deleteMiembrosDepartamentoController } from '../controller/miembrosDepartamentoController.js'
import { checkSession } from '../middleware/session.js'

const router = Router()

router.get('/api/miembrosDepartamento', checkSession, getMiembrosDepartamentoController)
router.post('/api/miembrosDepartamento', checkSession, createMiembrosDepartamentoController)
router.put('/api/miembrosDepartamento/:id', checkSession, updateMiembrosDepartamentoController)
router.delete('/api/miembrosDepartamento/:id', checkSession, deleteMiembrosDepartamentoController)

export default router
