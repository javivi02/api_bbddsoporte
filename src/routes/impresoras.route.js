
import { Router } from 'express'
import { getImpresorasController, createImpresorasController, updateImpresorasController, deleteImpresorasController } from '../controller/impresorasController.js'
import { checkSessionMiddleware } from '../middleware/checkSessionMiddleware.js'

const router = Router()

router.get('/api/impresoras', checkSessionMiddleware, getImpresorasController)
router.post('/api/impresoras', checkSessionMiddleware, createImpresorasController)
router.put('/api/impresoras/:id', checkSessionMiddleware, updateImpresorasController)
router.delete('/api/impresoras/:id', checkSessionMiddleware, deleteImpresorasController)

export default router
