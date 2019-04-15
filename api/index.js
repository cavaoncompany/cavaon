import { Router } from 'express'

import nodemailer from './nodemailer'

const router = Router()

// Add USERS Routes
router.use(nodemailer)

export default router
