import { Router } from 'express'

import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

router.get('/', skillsCtrl.index)
router.get('/new', skillsCtrl.new)

export {
  router
}

