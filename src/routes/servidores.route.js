import { Router } from 'express'
import { getServidoresController, createServidoresController, updateServidoresController, deleteServidoresController, getServidoresControllerPaginacion, getServidoresControllerCheckDuplicate } from '../controller/servidoresController.js'
import { checkSessionMiddleware } from '../middleware/checkSessionMiddleware.js'

const router = Router()

router.get('/api/servidores', getServidoresController)
router.get('/api/servidoresPaginacion', getServidoresControllerPaginacion)
router.get('/api/servidoresCheckDuplicate', getServidoresControllerCheckDuplicate)
router.post('/api/servidores', createServidoresController)
router.put('/api/servidores/:id', updateServidoresController)
router.delete('/api/servidores/:id', deleteServidoresController)

export default router
