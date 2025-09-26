
import { Router } from 'express'
import { getSalaMaquinasController, createSalaMaquinasController, updateSalaMaquinasController, deleteSalaMaquinasController } from '../controller/salaMaquinasController.js'
import { checkSession } from '../middleware/session.js'

const router = Router()

router.get('/api/salaMaquinas', checkSession, getSalaMaquinasController)
router.post('/api/salaMaquinas', checkSession, createSalaMaquinasController)
router.put('/api/salaMaquinas/:id', checkSession, updateSalaMaquinasController)
router.delete('/api/salaMaquinas/:id', checkSession, deleteSalaMaquinasController)

export default router
