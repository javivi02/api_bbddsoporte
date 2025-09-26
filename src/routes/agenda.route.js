import { Router } from 'express'
import { getAgendaController, createAgendaController, updateAgendaController, deleteAgendaController } from '../controller/agendaController.js'
import { checkSession } from '../middleware/session.js'

const router = Router()


router.get('/api/agenda', checkSession, getAgendaController)
router.post('/api/agenda', checkSession, createAgendaController)
router.put('/api/agenda/:id', checkSession, updateAgendaController)
router.delete('/api/agenda/:id', checkSession, deleteAgendaController)

export default router
