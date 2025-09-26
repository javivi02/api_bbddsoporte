import { Router } from 'express'
import { getAuricularesController, createAuricularesController, updateAuricularesController, deleteAuricularesController } from '../controller/auricularesController.js'
import { checkSession } from '../middleware/session.js'

const router = Router()


router.get('/api/auriculares', checkSession, getAuricularesController)
router.post('/api/auriculares', checkSession, createAuricularesController)
router.put('/api/auriculares/:id', checkSession, updateAuricularesController)
router.delete('/api/auriculares/:id', checkSession, deleteAuricularesController)

export default router
