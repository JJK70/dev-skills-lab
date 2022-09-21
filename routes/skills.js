import { Router } from 'express'



const router = Router()

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource')
})

export {
  router
}

// app.get('/', function(req, res) {
//   res.render('skills/index', {
//     skills: skills
//   })
// })

// import { Router } from 'express'

// import { skills } from '../data/skills-data.js'

// const router = Router()
