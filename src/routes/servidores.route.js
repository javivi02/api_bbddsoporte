
import { Router } from 'express'
import { getServidoresController, createServidoresController, updateServidoresController, deleteServidoresController } from '../controller/servidoresController.js'
import { checkSession } from '../middleware/session.js'

const router = Router()

router.get('/api/servidores', checkSession, getServidoresController)
router.post('/api/servidores', checkSession, createServidoresController)
router.put('/api/servidores/:id', checkSession, updateServidoresController)
router.delete('/api/servidores/:id', checkSession, deleteServidoresController)

export default router
