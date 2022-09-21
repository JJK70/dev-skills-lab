import { Skills } from '../data/skills-data.js'

import * as skillsCtrl from '../controllers/skills.js'

function index (req, res) {
 res.render('skills/index', {
   skills: skills
  })
}

export {
  index
}