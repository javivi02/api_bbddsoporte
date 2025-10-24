import { Router } from 'express'
import { getAreasController, createAreasController, updateAreasController, deleteAreasController } from '../controller/areasController.js'
import { checkSessionMiddleware } from '../middleware/checkSessionMiddleware.js'

const router = Router()


router.get('/api/areas', getAreasController)
router.post('/api/areas', checkSessionMiddleware, createAreasController)
router.put('/api/areas/:id', checkSessionMiddleware, updateAreasController)
router.delete('/api/areas/:id', checkSessionMiddleware, deleteAreasController)

export default router
