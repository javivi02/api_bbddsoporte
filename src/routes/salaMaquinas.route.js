
import { Router } from 'express'
import { getSalaMaquinasController, createSalaMaquinasController, updateSalaMaquinasController, deleteSalaMaquinasController } from '../controller/salaMaquinasController.js'
import { checkSession } from '../middleware/session.js'

const router = Router()

router.get('/api/salaMaquinas', getSalaMaquinasController)
router.post('/api/salaMaquinas', createSalaMaquinasController)
router.put('/api/salaMaquinas/:id', updateSalaMaquinasController)
router.delete('/api/salaMaquinas/:id', deleteSalaMaquinasController)

export default router
