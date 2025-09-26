
import { Router } from 'express'
import { getServidoresCcttController, createServidoresCcttController, updateServidoresCcttController, deleteServidoresCcttController } from '../controller/servidoresCcttController.js'
import { checkSession } from '../middleware/session.js'

const router = Router()

router.get('/api/servidoresCctt', checkSession, getServidoresCcttController)
router.post('/api/servidoresCctt', checkSession, createServidoresCcttController)
router.put('/api/servidoresCctt/:id', checkSession, updateServidoresCcttController)
router.delete('/api/servidoresCctt/:id', checkSession, deleteServidoresCcttController)

export default router
