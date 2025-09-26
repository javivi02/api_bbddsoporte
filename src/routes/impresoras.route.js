
import { Router } from 'express'
import { getImpresorasController, createImpresorasController, updateImpresorasController, deleteImpresorasController } from '../controller/impresorasController.js'
import { checkSession } from '../middleware/session.js'

const router = Router()

router.get('/api/impresoras', checkSession, getImpresorasController)
router.post('/api/impresoras', checkSession, createImpresorasController)
router.put('/api/impresoras/:id', checkSession, updateImpresorasController)
router.delete('/api/impresoras/:id', checkSession, deleteImpresorasController)

export default router
