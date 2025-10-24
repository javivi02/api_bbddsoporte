
import { Router } from 'express'
import { getServidoresCcttController, createServidoresCcttController, updateServidoresCcttController, deleteServidoresCcttController } from '../controller/servidoresCcttController.js'
import { checkSessionMiddleware } from '../middleware/checkSessionMiddleware.js'

const router = Router()

router.get('/api/servidoresCctt', checkSessionMiddleware, getServidoresCcttController)
router.post('/api/servidoresCctt', checkSessionMiddleware, createServidoresCcttController)
router.put('/api/servidoresCctt/:id', checkSessionMiddleware, updateServidoresCcttController)
router.delete('/api/servidoresCctt/:id', checkSessionMiddleware, deleteServidoresCcttController)

export default router
