import { Router } from 'express'
import { getAuricularesController, createAuricularesController, updateAuricularesController, deleteAuricularesController } from '../controller/auricularesController.js'
import { checkSessionMiddleware } from '../middleware/checkSessionMiddleware.js'

const router = Router()


router.get('/api/auriculares', checkSessionMiddleware, getAuricularesController)
router.post('/api/auriculares', checkSessionMiddleware, createAuricularesController)
router.put('/api/auriculares/:id', checkSessionMiddleware, updateAuricularesController)
router.delete('/api/auriculares/:id', checkSessionMiddleware, deleteAuricularesController)

export default router
