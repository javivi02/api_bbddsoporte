import { Router } from 'express'
import { getAdobeController, createAdobeController, updateAdobeController, deleteAdobeController } from '../controller/adobeController.js'
import { checkSessionMiddleware } from '../middleware/checkSessionMiddleware.js'

const router = Router()

router.get('/api/adobe', checkSessionMiddleware, getAdobeController)
router.post('/api/adobe', checkSessionMiddleware, createAdobeController)
router.put('/api/adobe/:id', checkSessionMiddleware, updateAdobeController)
router.delete('/api/adobe/:id', checkSessionMiddleware, deleteAdobeController)

export default router
