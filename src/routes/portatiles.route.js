import { Router } from 'express'
import { getPortatil, getPortatiles } from '../controller/portatilesController.js'

const router = Router()

router.get('/api/portatiles', getPortatiles)

router.get('/api/portatil:id', getPortatil)


export default router