import { Router } from 'express'
import { getAdobeController, createAdobeController, updateAdobeController, deleteAdobeController } from '../controller/adobeController.js'
import { checkSession } from '../middleware/session.js'

const router = Router()

router.get('/api/adobe', checkSession, getAdobeController)
router.post('/api/adobe', checkSession, createAdobeController)
router.put('/api/adobe/:id', checkSession, updateAdobeController)
router.delete('/api/adobe/:id', checkSession, deleteAdobeController)

export default router
