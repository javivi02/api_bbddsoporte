import { Router } from 'express'
import { getAlmacenController, createAlmacenController, updateAlmacenController, deleteAlmacenController } from '../controller/almacenController.js'
import { checkSessionMiddleware } from '../middleware/checkSessionMiddleware.js'

const router = Router()


router.get('/api/almacen', checkSessionMiddleware, getAlmacenController)
router.post('/api/almacen', checkSessionMiddleware, createAlmacenController)
router.put('/api/almacen/:id', checkSessionMiddleware, updateAlmacenController)
router.delete('/api/almacen/:id', checkSessionMiddleware, deleteAlmacenController)

export default router
