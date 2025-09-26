
import { Router } from 'express'
import { getSwitchController, createSwitchController, updateSwitchController, deleteSwitchController } from '../controller/switchController.js'
import { checkSession } from '../middleware/session.js'

const router = Router()

router.get('/api/switch', checkSession, getSwitchController)
router.post('/api/switch', checkSession, createSwitchController)
router.put('/api/switch/:id', checkSession, updateSwitchController)
router.delete('/api/switch/:id', checkSession, deleteSwitchController)

export default router
