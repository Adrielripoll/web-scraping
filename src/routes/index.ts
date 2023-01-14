import { Router } from 'express'
import { AppController } from '../controller/app.controller'

const router = Router()

router.get('/', AppController.get)

export default router