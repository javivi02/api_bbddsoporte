import { Router } from 'express'
import { getAreasController, createAreasController, updateAreasController, deleteAreasController } from '../controller/areasController.js'
import { checkSession } from '../middleware/session.js'

const router = Router()


router.get('/api/areas', getAreasController)
router.post('/api/areas', checkSession, createAreasController)
router.put('/api/areas/:id', checkSession, updateAreasController)
router.delete('/api/areas/:id', checkSession, deleteAreasController)

export default router
