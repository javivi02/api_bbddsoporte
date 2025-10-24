import { Router } from 'express'
import { getAgendaController, createAgendaController, updateAgendaController, deleteAgendaController } from '../controller/agendaController.js'
import { checkSessionMiddleware } from '../middleware/checkSessionMiddleware.js'

const router = Router()

router.get('/api/agenda', checkSessionMiddleware, getAgendaController)
router.post('/api/agenda', checkSessionMiddleware, createAgendaController)
router.put('/api/agenda/:id', checkSessionMiddleware, updateAgendaController)
router.delete('/api/agenda/:id', checkSessionMiddleware, deleteAgendaController)

export default router
