import { Router } from 'express'
import { getAlmacenController, createAlmacenController, updateAlmacenController, deleteAlmacenController } from '../controller/almacenController.js'
import { checkSession } from '../middleware/session.js'

const router = Router()


router.get('/api/almacen', checkSession, getAlmacenController)
router.post('/api/almacen', checkSession, createAlmacenController)
router.put('/api/almacen/:id', checkSession, updateAlmacenController)
router.delete('/api/almacen/:id', checkSession, deleteAlmacenController)

export default router
