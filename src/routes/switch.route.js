
import { Router } from 'express'
import { getSwitchController, createSwitchController, updateSwitchController, deleteSwitchController } from '../controller/switchController.js'
import { checkSessionMiddleware } from '../middleware/checkSessionMiddleware.js'

const router = Router()

router.get('/api/switch', checkSessionMiddleware, getSwitchController)
router.post('/api/switch', checkSessionMiddleware, createSwitchController)
router.put('/api/switch/:id', checkSessionMiddleware, updateSwitchController)
router.delete('/api/switch/:id', checkSessionMiddleware, deleteSwitchController)

export default router
